import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../../../componentes/servicios/product.service';

@Component({
  selector: 'app-camisetas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './camisetas.component.html',
  styleUrls: ['./camisetas.component.css']
})
export class CamisetasComponent {
  productos = [
    { id_product: 39, nombre: 'Camiseta DryFit Negra', precio: 899, img: 'CAMN.jpg' },
    { id_product: 40, nombre: 'Camiseta DryFit Blanca', precio: 899, img: 'CAMB.jpg' },
    { id_product: 41, nombre: 'Camiseta DryFit Azul Marino', precio: 999, img: 'CAMAZ.jpg' },
    { id_product: 42, nombre: 'Camiseta DryFit Gris', precio: 999, img: 'CAMG.jpg' },
    { id_product: 43, nombre: 'Camiseta DryFit Café', precio: 999, img: 'CAMC.jpg' }
  ];

  constructor(private productService: ProductService) {}

  agregarAlCarrito(producto: any) {
    this.productService.addToCompra(producto.id_product);
    alert(`Agregaste ${producto.nombre} al carrito.`);
  }
}
