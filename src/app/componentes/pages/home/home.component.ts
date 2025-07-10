import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  mostrarMujeres = true;

  mostrarSeccionMujeres() {
    this.mostrarMujeres = true;
  }

  mostrarSeccionHombres() {
    this.mostrarMujeres = false;
  }
}
