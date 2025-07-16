import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // necesario para routerLink

@Component({
  selector: 'app-hombre',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hombre.component.html',
  styleUrls: ['./hombre.component.css']
})
export class HombreComponent {
  secciones = [
    { nombre: 'Camisetas', ruta: '/ropa/hombre/camisetas', img: 'PlayeraLicraNegra.jpg' },
    { nombre: 'Shorts', ruta: '/ropa/hombre/shorts', img: 'ShortAzul.jpg' },
    { nombre: 'Pantalones', ruta: '/ropa/hombre/pantalones', img: 'Pans 1.jpeg' },
    { nombre: 'Chamarras Deportivas', ruta: '/ropa/hombre/chamarras', img: 'ChamarraHombre.jpg' } // agrega si tienes esta categoría
  ];

  masVendidos = [
    { nombre: 'Camiseta Nike', precio: 1299, img: 'PlayeraLicraNegra.jpg' },
    { nombre: 'Short Deportivo Adidas', precio: 799, img: 'ShortAzul.jpg' },
    { nombre: 'Pantalón Under Armour', precio: 1199, img: 'Pans 1.jpeg' }
  ];
}
