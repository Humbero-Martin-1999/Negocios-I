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
    { nombre: 'Leggings', ruta: '/ropa/mujer/leggings', img: 'LG2.jpg' },
    { nombre: 'Shorts', ruta: '/ropa/mujer/shorts', img: 'SH2.jpg' },
    { nombre: 'Bra Deportivo', ruta: '/ropa/mujer/bra-deportivo', img: 'BR2.jpg' },
    { nombre: 'Chamarras Deportivas', ruta: '/ropa/mujer/chamarras-deportivas-mujer', img: 'CH1.jpg' }
  ];

  masVendidos = [
    { nombre: 'Legging Aurola Negro', precio: 1499, img: 'LG1.jpg' },
    { nombre: 'Bra Deportivo Aurola Azul Marino', precio: 899, img: 'BR1.jpg' },
    { nombre: 'Short Tom Tiger Azul Claro', precio: 799, img: 'SH1.jpg' }
  ];
}
