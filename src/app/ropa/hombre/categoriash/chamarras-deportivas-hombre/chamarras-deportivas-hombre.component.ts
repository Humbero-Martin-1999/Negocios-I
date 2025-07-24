import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../../../componentes/servicios/product.service';

@Component({
  selector: 'app-chamarras-deportivas-hombre',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './chamarras-deportivas-hombre.component.html',
  styleUrls: ['./chamarras-deportivas-hombre.component.css']
})
export class ChamarrasDeportivasHombreComponent {
  productos = [
    { id: 55, nombre: 'Chamarra Deportiva Negra Hombre', precio: 1599, img: 'CHN.jpg' },
    { id: 56, nombre: 'Chamarra Deportiva Amarilla Hombre', precio: 1499, img: 'CHAM.jpg' },
    { id: 57, nombre: 'Chamarra Deportiva Café Hombre', precio: 1399, img: 'CHAC.jpg' },
    { id: 58, nombre: 'Chamarra Deportiva Blanca Hombre', precio: 1599, img: 'CHBH.jpg' },
    { id: 59, nombre: 'Chamarra Deportiva Purpura Hombre', precio: 1499, img: 'CHP.jpg' }
  ];

  constructor(private productService: ProductService) {}

  agregarAlCarrito(producto: any) {
    this.productService.addToCompra(producto.id);
    alert(`Agregaste ${producto.nombre} al carrito.`);
  }
}
