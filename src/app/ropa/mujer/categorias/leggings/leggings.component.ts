import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../../../componentes/servicios/product.service';

@Component({
  selector: 'app-leggings',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './leggings.component.html',
  styleUrls: ['./leggings.component.css']
})
export class LeggingsComponent {
  productos = [
    { id: 1, nombre: 'Legging Deportivo Negro', precio: 1499, img: 'LNegro.jpg' },
    { id: 2, nombre: 'Legging Deportivo Azul', precio: 1399, img: 'LAM.jpg' },
    { id: 3, nombre: 'Legging Deportivo Café', precio: 1199, img: 'LMAR.jpg' },
    { id: 4, nombre: 'Legging Deportivo Naranja', precio: 999, img: 'LNAR.jpg' },
    { id: 5, nombre: 'Legging Deportivo Blanco', precio: 1099, img: 'LBL.jpg' },
    { id: 6, nombre: 'Legging Deportivo Magenta', precio: 1199, img: 'LMAG.jpg' },
    { id: 7, nombre: 'Legging Deportivo Gris', precio: 1299, img: 'LGRI.jpg' },
    { id: 8, nombre: 'Legging Deportivo Natural', precio: 1399, img: 'LNAT.jpg' },
    { id: 9, nombre: 'Legging Deportivo Rojo Llama', precio: 999, img: 'LRLL.jpg' },
    { id: 10, nombre: 'Legging Deportivo Morado', precio: 1299, img: 'LUV.jpg' },
    { id: 11, nombre: 'Legging Deportivo Verde', precio: 1099, img: 'LVER.jpg' },
    { id: 12, nombre: 'Legging Deportivo Azul Klein', precio: 999, img: 'LAK.jpg' },
    { id: 13, nombre: 'Legging Deportivo Chocolate', precio: 1149, img: 'LCH.jpg' },
    { id: 14, nombre: 'Legging Deportivo Moca', precio: 1299, img: 'LMO.jpg' },
  ];

  constructor(private productService: ProductService) { }

  agregarAlCarrito(producto: any) {
    this.productService.addToCompra(producto.id);
    alert(`Agregaste ${producto.nombre} al carrito.`);
  }
}
