import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../../../componentes/servicios/product.service';

@Component({
  selector: 'app-shorts',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './shorts.component.html',
  styleUrls: ['./shorts.component.css']
})
export class ShortsComponent {
  productos = [
    { id: 15, nombre: 'Short Deportivo Negro', precio: 799, img: 'SHN.jpg' },
    { id: 16, nombre: 'Short Deportivo Azul', precio: 749, img: 'SHA.jpg' },
    { id: 17, nombre: 'Short Deportivo Café', precio: 699, img: 'SHC.jpg' },
    { id: 18, nombre: 'Short Deportivo Azul Cielo', precio: 849, img: 'SH1.jpg' },
    { id: 19, nombre: 'Short Deportivo Rojo', precio: 799, img: 'SHR.jpg' },
    { id: 20, nombre: 'Short Deportivo Gris', precio: 749, img: 'SHG.jpg' },
    { id: 21, nombre: 'Short Deportivo Naranja', precio: 699, img: 'SHNA.jpg' },
    { id: 22, nombre: 'Short Deportivo Verde', precio: 899, img: 'SHV.jpg' },
    { id: 23, nombre: 'Short Deportivo Marino', precio: 899, img: 'SHMA.jpg' }
  ];

  constructor(private productService: ProductService) { }

  agregarAlCarrito(producto: any) {
    this.productService.addToCompra(producto.id);
    alert(`Agregaste ${producto.nombre} al carrito.`);
  }
}
