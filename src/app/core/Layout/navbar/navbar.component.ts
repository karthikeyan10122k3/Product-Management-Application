import { Component, inject, OnInit, signal } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { SearchProductService } from '../../services/searchProduct/search-product.service';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [FormsModule, RouterLink, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  search = ""
  searchInputService = inject(SearchProductService)

  constructor(){ }

  searchInputChange(){
    this.searchInputService.updateSearchInput(this.search)
  }

  

}
