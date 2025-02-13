import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../interface/product';

@Injectable({
  providedIn: 'root'
})
export class SearchProductService {
  private searchInputBehaviorSubject = new BehaviorSubject<string>("")
  private searchedProductListBehaviorSubject = new BehaviorSubject<Product[]>([])
  
  constructor() { }

  getSearchedInput(){
    return this.searchInputBehaviorSubject.asObservable()
  }

  updateSearchInput(searchInputValue: string){
    this.searchInputBehaviorSubject.next(searchInputValue)
  }

  getSearchedProductList(){
    return this.searchedProductListBehaviorSubject.asObservable()
  }

  updateSearchedProductList(updatedProductList: Product[]){
    this.searchedProductListBehaviorSubject.next(updatedProductList)
  }

}
