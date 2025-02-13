import { Component } from '@angular/core';
import { NavbarComponent } from './core/Layout/navbar/navbar.component';
import { ProductDisplayComponent } from './components/product-display/product-display.component';
import { FooterComponent } from './core/Layout/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
