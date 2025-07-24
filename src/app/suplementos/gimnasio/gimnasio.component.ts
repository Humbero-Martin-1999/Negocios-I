import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../componentes/servicios/product.service';

@Component({
  selector: 'app-gimnasio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gimnasio.component.html',
  styleUrls: ['./gimnasio.component.css']
})
export class GimnasioComponent {
  suplementos = [
    { id: 60, nombre: 'Proteína Whey Gold Standard 2,27kg', precio: 1719, img: 'WHEY.webp' },
    { id: 61, nombre: 'Proteína Elite 2,3kg', precio: 1639, img: 'ELITE.webp' },
    { id: 62, nombre: 'Proteína Whey Pro 2,4kg', precio: 1849, img: 'WHEYP.png' },
    { id: 63, nombre: 'Proteína Birdman 1,4kg', precio: 1069, img: 'BIRD.avif' },
    { id: 64, nombre: 'Creatina Birdman 450g', precio: 465, img: 'BIRDC.jpg' },
    { id: 65, nombre: 'Creatina X-GEAR 150g', precio: 240, img: 'XGEAR.png' },
    { id: 66, nombre: 'Creatina GAT 1kg', precio: 820, img: 'GAT.webp' },
    { id: 67, nombre: 'Creatina BioShark 500g', precio: 519, img: 'SHARK.webp' }
  ];

  constructor(private productService: ProductService) {}

  agregarAlCarrito(suplemento: any) {
    this.productService.addToCompra(suplemento.id);
    alert(`Agregaste ${suplemento.nombre} al carrito.`);
  }
}
