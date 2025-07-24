import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../componentes/servicios/product.service';

@Component({
  selector: 'app-yoga-bienestar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './yoga-bienestar.component.html',
  styleUrls: ['./yoga-bienestar.component.css']
})
export class YogaBienestarComponent {
  suplementos = [
    { id: 86, nombre: 'Proteína Vegana Orgánica', precio: 599, img: 'PROV.jpg' },
    { id: 87, nombre: 'Suplemento Vitamínas Y Minerales 120 caps', precio: 399, img: 'MULT.avif' },
    { id: 88, nombre: 'Omega 3 500 caps', precio: 749, img: 'O3.avif' },
    { id: 89, nombre: 'Colágeno Hidrolizado con Magnesio 345g', precio: 319, img: 'COL.jpeg' }
  ];

  constructor(private productService: ProductService) {}

  agregarAlCarrito(suplemento: any) {
    this.productService.addToCompra(suplemento.id);
    alert(`Agregaste ${suplemento.nombre} al carrito.`);
  }
}
