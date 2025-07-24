import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../../../componentes/servicios/product.service';

@Component({
  selector: 'app-shortsh',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './shortsh.component.html',
  styleUrls: ['./shortsh.component.css']
})
export class ShortshComponent {
  productos = [
    { id_product: 44, name: 'Short Hombre Negro + Licra Negra', price: 849, image: 'SHNH.jpg', description: '' },
    { id_product: 45, name: 'Short Hombre Azul Claro + Licra Negra', price: 799, image: 'SHAC.jpg', description: '' },
    { id_product: 46, name: 'Short Hombre Azul Marino + Licra Negra', price: 899, image: 'SHAM.jpg', description: '' },
    { id_product: 47, name: 'Short Hombre Gris + Licra Negra', price: 849, image: 'SHGH.jpg', description: '' },
    { id_product: 48, name: 'Short Hombre Café + Licra Negra', price: 899, image: 'SHHC.jpg', description: '' },
    { id_product: 49, name: 'Short Hombre Blanco + Licra Negra', price: 899, image: 'SHB.jpg', description: '' },
    { id_product: 50, name: 'Short Hombre Rojo + Licra Negra', price: 899, image: 'SHRH.jpg', description: '' }
  ];

  constructor(private productService: ProductService) {}

  agregarAlCarrito(producto: any) {
    this.productService.addToCompra(producto.id_product);
    alert(`Agregaste ${producto.name} al carrito.`);
  }
}
