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
    { nombre: 'Camisetas', ruta: '/ropa/hombre/camisetas', img: 'CAMN.jpg' },
    { nombre: 'Shorts', ruta: '/ropa/hombre/shortsh', img: 'SHOP.jpg' },
    { nombre: 'Pants', ruta: '/ropa/hombre/pans', img: 'PANGN.jpg' },
    { nombre: 'Chamarras Deportivas', ruta: '/ropa/hombre/chamarras-deportivas-hombre', img: 'CHN.jpg' } // agrega si tienes esta categoría
  ];

  masVendidos = [
    { nombre: 'Camiseta DryFit Negra', precio: 899, img: 'CAMN.jpg' },
    { nombre: 'Short Hombre Azul Marino + Licra Negra', precio: 849, img: 'SHAM.jpg' },
    { nombre: 'Pants Deportivo Azul Con Blanco', precio: 1199, img: 'PANAB.jpg' }
  ];
}
