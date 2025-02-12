import { Component, inject, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../core/interface/product';
import { NgFor, NgIf } from '@angular/common';
import { ProductApiCallsService } from '../../core/services/productApiCall/product-api-calls.service';

@Component({
  selector: 'app-product-display',
  imports: [ProductCardComponent, NgFor,NgIf],
  templateUrl: './product-display.component.html',
  styleUrl: './product-display.component.css'
})
export class ProductDisplayComponent implements OnInit {
  productList: Product[] = [];
  favoriteList: Product[] = [];
  showFavoriteList: boolean = false;

  productFetchService = inject(ProductApiCallsService);

  ngOnInit() {
    this.productFetchService.fetchProducts();
    
    this.productFetchService.getProducts().subscribe(result=>{
      this.productList = result
    })
  }

  handleProductSelection(productId: number) {
    const updatedProductList = this.productList.map(product =>
      product.id === productId ? { ...product, isFavorite: !product.isFavorite } : product
    );
  
    this.productFetchService.updateProductsBehaviourSubject(updatedProductList);
    this.favoriteList = updatedProductList.filter(p => p.isFavorite);
  }
  

  toggleFavoriteSwitch() {
    this.showFavoriteList = !this.showFavoriteList;
  }
}
