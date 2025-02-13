import { inject, Injectable } from '@angular/core';
import { Product } from '../../interface/product';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FavoriteService } from '../favoritesService/favorite.service';
import { SearchProductService } from '../searchProduct/search-product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    private Http = inject(HttpClient);
    private ProductApiUrl = "https://fakestoreapi.com/products";
    private ProductsBehaviourSubject = new BehaviorSubject<Product[]>([]);
    favoriteService = inject(FavoriteService);
    searchedProductService = inject(SearchProductService);
    private currentSearchedProductList: Product[] ;

    constructor() { 
      this.currentSearchedProductList = []
    }

    fetchProducts() {
      if (this.ProductsBehaviourSubject.getValue().length === 0) {
        this.Http.get<Product[]>(this.ProductApiUrl).pipe(take(1)).subscribe(result => {
          const productsWithFavorite = result.map(product => ({ ...product, isFavorite: false }));
          this.ProductsBehaviourSubject.next(productsWithFavorite);
        });
      }
    }

    getProducts(): Observable<Product[]> {
      return this.ProductsBehaviourSubject.asObservable();
    }

    updateProductsBehaviourSubject(updatedProductList: Product[]) {
      this.ProductsBehaviourSubject.next(updatedProductList);
    }

    handleFavoriteSelection(productId: number) {
      this.searchedProductService.getSearchedProductList().subscribe(result=>{
        this.currentSearchedProductList = result
      })
      const updatedProductList = this.currentSearchedProductList.map(product =>
        product.id === productId ? { ...product, isFavorite: !product.isFavorite } : product
      );

      this.favoriteService.updateFavorite(updatedProductList)

      this.searchedProductService.updateSearchedProductList(updatedProductList)
      this.favoriteService.updateFavorite(updatedProductList.filter(p => p.isFavorite));
    }
}
