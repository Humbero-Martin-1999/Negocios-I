import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../../../componentes/servicios/product.service';

@Component({
  selector: 'app-bra-deportivo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './bra-deportivo.component.html',
  styleUrls: ['./bra-deportivo.component.css']
})
export class BraDeportivoComponent {
  productos = [
    { id: 24, nombre: 'Bra Deportivo Negro', precio: 899, img: 'BRN.jpg' },
    { id: 25, nombre: 'Bra Deportivo Azul Marino', precio: 849, img: 'BR1.jpg' },
    { id: 26, nombre: 'Bra Deportivo Rosa', precio: 799, img: 'BRR.jpg' },
    { id: 27, nombre: 'Bra Deportivo Blanco', precio: 899, img: 'BRB.jpg' },
    { id: 28, nombre: 'Bra Deportivo Gris', precio: 849, img: 'BRG.jpg' },
    { id: 29, nombre: 'Bra Deportivo Morado', precio: 799, img: 'BRM.jpg' },
    { id: 30, nombre: 'Bra Deportivo Verde', precio: 899, img: 'BRV.jpg' },
    { id: 31, nombre: 'Bra Deportivo Naranja', precio: 799, img: 'BRNA.jpg' },
    { id: 32, nombre: 'Bra Deportivo Lila', precio: 799, img: 'BRL.jpg' },
    { id: 33, nombre: 'Bra Deportivo Natural', precio: 799, img: 'BRNAT.jpg' }
  ];

  constructor(private productService: ProductService) {}

  agregarAlCarrito(producto: any) {
    this.productService.addToCompra(producto.id);
    alert(`Agregaste ${producto.nombre} al carrito.`);
  }
}
