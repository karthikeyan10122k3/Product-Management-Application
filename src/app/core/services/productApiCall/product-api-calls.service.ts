import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../../interface/product';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductApiCallsService {

  private Http = inject(HttpClient)
  private ProductApiUrl = "https://fakestoreapi.com/products"

  private ProductsBehaviourSubject = new BehaviorSubject<Product[]>([])


  constructor() { }

  fetchProducts(){
    if(this.ProductsBehaviourSubject.getValue().length == 0){
      this.Http.get<Product[]>(this.ProductApiUrl).subscribe((result)=>{
        this.ProductsBehaviourSubject.next(result)
      })
    }
  }

  getProducts(): Observable<Product[]>{
    return this.ProductsBehaviourSubject.asObservable()
  }

  updateProductsBehaviourSubject(updatedProductList: Product[]){
    this.ProductsBehaviourSubject.next(updatedProductList)
  }

  
}
