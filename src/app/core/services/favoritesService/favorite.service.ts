import { Injectable } from '@angular/core';
import { Product } from '../../interface/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  favoriteBehaviourSubject = new BehaviorSubject<Product[]>([])

   getFavorites(){
    return this.favoriteBehaviourSubject.asObservable()
   }

   updateFavorite(updatedFavoriteList: Product[]){
    this.favoriteBehaviourSubject.next(updatedFavoriteList)
   }

}
