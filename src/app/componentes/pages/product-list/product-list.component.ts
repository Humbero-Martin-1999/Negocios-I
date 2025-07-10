import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../servicios/product.service';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  imports: [FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  productosList: Product[] = [];
  compra: number[] = [];
  productoSeleccionado: Product | null = null;
  cantidadSeleccionada: number = 1;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productosList = this.productService.getProducts(); 
    this.loadCompra();
  }

  loadCompra() {
    this.compra = this.productService.getCompra();
  }

  addToCompra(id: number) {
    this.productService.addToCompra(id);
    this.loadCompra();


  }

  removeFromCompra(id: number) {
    this.productService.removeFromFavorites(id);
    this.loadCompra();
  }

  checkCompra(id_product: number) {
    return this.compra.includes(id_product);

  }

  openComprarModal(product: Product) {
    this.productoSeleccionado = product;
    this.cantidadSeleccionada = 1;

    const modal = new (window as any).bootstrap.Modal(
      document.getElementById('comprarModal')
    );
    modal.show();
  }

  confirmarCompra() {
    if (!this.productoSeleccionado) return;

    const compra = this.productService.getCompra();
    for (let i = 0; i < this.cantidadSeleccionada; i++) {
      compra.push(this.productoSeleccionado.id_product);
    }

    localStorage.setItem('compra', JSON.stringify(compra));
    this.loadCompra();

    const modalEl = document.getElementById('comprarModal');
    const modal = (window as any).bootstrap.Modal.getInstance(modalEl);
    modal.hide();
  }

}
