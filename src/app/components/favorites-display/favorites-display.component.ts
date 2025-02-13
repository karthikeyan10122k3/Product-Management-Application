import { Component, inject, OnInit } from '@angular/core';
import { ProductCardComponent } from "../../core/reuseables/product-card/product-card.component";
import { Product } from '../../core/interface/product';
import { NgFor, NgIf } from '@angular/common';
import { FavoriteService } from '../../core/services/favoritesService/favorite.service';
import { ProductsService } from '../../core/services/productsService/products.service';

@Component({
  selector: 'app-favorites-display',
  imports: [ProductCardComponent, NgFor, NgIf],
  templateUrl: './favorites-display.component.html',
  styleUrl: './favorites-display.component.css'
})
export class FavoritesDisplayComponent implements OnInit {

  favoriteList: Product[];

  constructor(){
    this.favoriteList = []
  }
  favoriteService = inject(FavoriteService)
  productService = inject(ProductsService)

  ngOnInit(): void {
    this.favoriteService.getFavorites().subscribe(result=>{
      this.favoriteList = result
    })
  }

  handleFavoriteSelection(productId: number){
      this.productService.handleFavoriteSelection(productId)

  }



}
