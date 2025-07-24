import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../componentes/servicios/product.service';

@Component({
  selector: 'app-running',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './running.component.html',
  styleUrls: ['./running.component.css']
})
export class RunningComponent {
  suplementos = [
    { id: 68, nombre: 'Gel Energético GU sabor Moras', precio: 49, img: 'GUM.webp' },
    { id: 69, nombre: 'Gel Energético GU sabor Blackberry', precio: 49, img: 'GUB.webp' },
    { id: 70, nombre: 'Gel Energético GU sabor Naranja', precio: 49, img: 'GUN.webp' },
    { id: 71, nombre: 'Gel Energético GU sabor Chocolate', precio: 49, img: 'GUC.jpg' },
    { id: 72, nombre: 'Gel Energético GU sabor Limón', precio: 49, img: 'GUL.webp' },
    { id: 73, nombre: 'Gel Energético RUTS sabor Fresa', precio: 49, img: 'RUTSF.webp' },
    { id: 74, nombre: 'Gel Energético RUTS sabor Arandano', precio: 49, img: 'RUTSA.jpg' },
    { id: 75, nombre: 'Gel Energético RUTS sabor Mango', precio: 49, img: 'RUTSM.webp' },
    { id: 76, nombre: 'Gel Energético MAURTEN sin cafeína', precio: 99, img: 'MAUR.webp' },
    { id: 77, nombre: 'Gel Energético MAURTEN con cafeína', precio: 199, img: 'MAURC.jpeg' },
    { id: 78, nombre: 'Tabletas de electrolitos GU sabor Lima-Limón', precio: 199, img: 'GUELI.webp' },
    { id: 79, nombre: 'Tabletas de electrolitos GU sabor Fresa', precio: 199, img: 'GUEF.webp' },
    { id: 80, nombre: 'Tabletas de electrolitos GU sabor Naranja', precio: 199, img: 'GUEN.jpg' },
    { id: 81, nombre: 'Tabletas de electrolitos GU sabor Limonada de Fresa', precio: 199, img: 'GUEFL.webp' },
  ];

  constructor(private productService: ProductService) {}

  agregarAlCarrito(suplemento: any) {
    this.productService.addToCompra(suplemento.id);
    alert(`Agregaste ${suplemento.nombre} al carrito.`);
  }
}
