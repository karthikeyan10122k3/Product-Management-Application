import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { ProductCardComponent } from '../../core/reuseables/product-card/product-card.component';
import { Product } from '../../core/interface/product';
import { NgFor } from '@angular/common';
import { SearchProductService } from '../../core/services/searchProduct/search-product.service';
import { ProductsService } from '../../core/services/productsService/products.service';
import { FavoriteService } from '../../core/services/favoritesService/favorite.service';

@Component({
  selector: 'app-product-display',
  imports: [ProductCardComponent, NgFor],
  templateUrl: './product-display.component.html',
  styleUrl: './product-display.component.css'
})
export class ProductDisplayComponent implements OnInit {
  
  productList: Product[];
  searchedProductList: Product[];
  searchInput = signal("")

  ProductsService = inject(ProductsService);
  favoriteService = inject(FavoriteService);
  searchInputService  = inject(SearchProductService);

  constructor(){
    this.productList = []
    this.searchedProductList = []
    
    effect(()=>{
      this.checkSearchedProduct()
    })
  }

  ngOnInit() {
    this.ProductsService.fetchProducts()
    this.getProducts()
    this.getSearchedInput()
    this.getSearchedProductList()
  }

  getProducts(){
    this.ProductsService.getProducts().subscribe(result=>{
      this.productList = result
    })
  }

  getSearchedInput(){
    this.searchInputService.getSearchedInput().subscribe(result=>{
      this.searchInput.set(result)
    })
  }

  getSearchedProductList(){
    this.searchInputService.getSearchedProductList().subscribe(result=>{
      this.searchedProductList = result
    })
  }

  checkSearchedProduct(){
    const currentSearchedProductList = this.productList.filter((prod)=>{
      return prod.title.toLowerCase().includes(this.searchInput().toLowerCase())
    })
    this.searchInputService.updateSearchedProductList(currentSearchedProductList)
    this.getSearchedProductList();
  }

  handleFavoriteSelection(productId: number) {
    
    const searchedProductToast = this.searchedProductList.find(p => p.id === productId);
  
    if (searchedProductToast) {
      const isAddingToFavorites = !searchedProductToast.isFavorite;
  
      this.ProductsService.handleFavoriteSelection(productId);
  
      if (isAddingToFavorites) {
        const toast = document.getElementById('favoriteToast');
        if (toast) {
          toast.classList.add('show');
          setTimeout(() => {
            toast.classList.remove('show'); 
          }, 2000);
        }
      }
    }
  }
  
}
