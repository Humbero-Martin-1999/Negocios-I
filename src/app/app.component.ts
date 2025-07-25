import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./componentes/pages/header/header.component";
import { FooterComponent } from "./componentes/pages/footer/footer.component";
import { FormsModule } from '@angular/forms';
import { ApplicationConfig } from '@angular/core';  

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce';
}
