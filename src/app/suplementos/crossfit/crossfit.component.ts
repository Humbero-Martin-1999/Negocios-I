import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../componentes/servicios/product.service';

@Component({
  selector: 'app-crossfit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crossfit.component.html',
  styleUrls: ['./crossfit.component.css']
})
export class CrossfitComponent {
  suplementos = [
    { id: 82, nombre: 'Pre-Entreno X-GEAR 150g', precio: 349, img: 'PREXGEAR.png' },
    { id: 83, nombre: 'Pre-Entreno Coura 300g', precio: 329, img: 'PRECO.jpg' },
    { id: 84, nombre: 'Pre-Entreno Gold Standard 330g', precio: 549, img: 'PREGO.jpg' },
    { id: 85, nombre: 'Pre-Entreno BioShark 320g', precio: 299, img: 'PREBIO.webp' }
  ];

  constructor(private productService: ProductService) {}

  agregarAlCarrito(suplemento: any) {
    this.productService.addToCompra(suplemento.id);
    alert(`Agregaste ${suplemento.nombre} al carrito.`);
  }
}
