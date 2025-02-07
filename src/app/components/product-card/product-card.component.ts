import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../core/interface/product';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports : [NgClass],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() selectedProductId = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {
    if (this.product.isFavorite === undefined) {
      this.product.isFavorite = false;
    }
  }

  getCardClass(price: number): string {
    if (price < 100) {
      return 'bg-success text-white'; 
    } else if (price >= 100 && price <= 600) {
      return 'bg-warning text-dark'; 
    } else {
      return 'bg-danger text-white'; 
    }
  }

  favoriteToggle(productId: number) {
    this.selectedProductId.emit(productId);
  }
}
