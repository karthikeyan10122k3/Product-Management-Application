import { Component } from '@angular/core';
import { NavbarComponent } from "./components/Layout/navbar/navbar.component";
import { ProductDisplayComponent } from './components/product-display/product-display.component';
import { FooterComponent } from "./components/Layout/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, ProductDisplayComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
