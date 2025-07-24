import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../../../componentes/servicios/product.service';

@Component({
  selector: 'app-chamarras-deportivas-mujer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './chamarras-deportivas-mujer.component.html',
  styleUrls: ['./chamarras-deportivas-mujer.component.css']
})
export class ChamarrasDeportivasMujerComponent {
  productos = [
    { id: 34, nombre: 'Chamarra Deportiva Negra', precio: 1599, img: 'CH1.jpg' },
    { id: 35, nombre: 'Chamarra Deportiva Rosa', precio: 1499, img: 'CHR.jpg' },
    { id: 36, nombre: 'Chamarra Deportiva Gris', precio: 1399, img: 'CHG.jpg' },
    { id: 37, nombre: 'Chamarra Deportiva Blanca', precio: 1599, img: 'CHB.jpg' },
    { id: 38, nombre: 'Chamarra Deportiva Beige', precio: 1499, img: 'CHBE.jpg' }
  ];

  constructor(private productService: ProductService) {}

  agregarAlCarrito(producto: any) {
    this.productService.addToCompra(producto.id);
    alert(`Agregaste ${producto.nombre} al carrito.`);
  }
}
