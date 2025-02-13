import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FavoritesDisplayComponent } from './components/favorites-display/favorites-display.component';
import { ProductDisplayComponent } from './components/product-display/product-display.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:ProductDisplayComponent
    },
    {
        path:'favorites',
        component:FavoritesDisplayComponent
    }
];
