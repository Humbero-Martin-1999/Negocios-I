import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // 👈 necesario para routerLink

@Component({
  selector: 'app-mujer',
  standalone: true, // 👈 habilita standalone
  imports: [CommonModule, RouterModule], // 👈 importa RouterModule aquí
  templateUrl: './mujer.component.html',
  styleUrls: ['./mujer.component.css']
})
export class MujerComponent {
  secciones = [
    { nombre: 'Leggings', ruta: '/ropa/mujer/leggings', img: 'Legging 1.jpg' },
    { nombre: 'Shorts', ruta: '/ropa/mujer/shorts', img: 'Short 1.jpeg' },
    { nombre: 'Bra Deportivo', ruta: '/ropa/mujer/bra-deportivo', img: 'Bra 1.jpeg' },
    { nombre: 'Chamarras Deportivas', ruta: '/ropa/mujer/chamarras', img: 'Chamarra 1.jpeg' }
  ];

  masVendidos = [
    { nombre: 'Legging Nike PRO', precio: 1499, img: 'Legging 1.jpg' },
    { nombre: 'Bra Deportivo Adidas', precio: 899, img: 'Bra 1.jpeg' },
    { nombre: 'Short Under Armour', precio: 699, img: 'Short 1.jpeg' }
  ];
}
