import { Component, inject, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../core/interface/product';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-display',
  imports: [ProductCardComponent, NgFor],
  templateUrl: './product-display.component.html',
  styleUrl: './product-display.component.css'
})
export class ProductDisplayComponent implements OnInit {
  productList: Product[] = [];
  favoriteList: Product[] = [];
  showFavoriteList: boolean = false;

  http = inject(HttpClient);

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.http.get<Product[]>('https://fakestoreapi.com/products').subscribe((result) => {
      this.productList = result.map(product => ({ 
        ...product, isFavorite: false 
      }));
    });
  }

  handleProductSelection(productId: number) {
    const product = this.productList.find(product => product.id === productId);
    if (!product) {
      throw new Error("Invalid Product ID");
    }

    product.isFavorite = !product.isFavorite; 

    this.favoriteList = this.productList.filter(p => p.isFavorite);
    
  }

  toggleFavoriteSwitch() {
    this.showFavoriteList = !this.showFavoriteList;
  }
}
