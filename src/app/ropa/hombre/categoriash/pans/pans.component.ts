import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../../../componentes/servicios/product.service';

@Component({
  selector: 'app-pans',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pans.component.html',
  styleUrls: ['./pans.component.css']
})
export class PansComponent {
  productos = [
    { id_product: 51, nombre: 'Pants Deportivo Azul Con Blanco', precio: 1099, image: 'PANAB.jpg' },
    { id_product: 52, nombre: 'Pants Deportivo Gris Con Negro', precio: 1149, image: 'PANGN.jpg' },
    { id_product: 53, nombre: 'Pants Deportivo Blanco Con Negro', precio: 1199, image: 'PANBN.jpg' },
    { id_product: 54, nombre: 'Pants Deportivo Rojo Con Negro', precio: 1199, image: 'PANRN.jpg' }
  ];

  constructor(private productService: ProductService) {}

  agregarAlCarrito(producto: any) {
    this.productService.addToCompra(producto.id_product);
    alert(`Agregaste ${producto.nombre} al carrito.`);
  }
}
