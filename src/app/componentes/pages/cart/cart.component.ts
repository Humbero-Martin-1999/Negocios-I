import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../servicios/product.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  myCart: Product[] = [];

  compra: number[] = [];

  datosCompra: Product[] = [];

  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.loadInitialProducts();
    this.loadCompra();
    this.datosCompra = this.myCart.filter(product => this.compra.includes(product.id_product));
    console.log(this.datosCompra);
  }

  loadCompra() {
    this.compra = this.productService.getCompra();
    console.log(this.compra);
  }

  loadInitialProducts() {
    this.myCart = this.productService.getProducts();
    console.log(this.myCart);
  }

  

  loadDatosCompra() {
    this.loadCompra();
    this.datosCompra = this.myCart.filter(product => this.compra.includes(product.id_product));
  }

  contarProducto(id: number): number {
    return this.compra.filter(p => p === id).length;
  }

  agregarUno(id: number) {
    this.compra.push(id);
    localStorage.setItem('compra', JSON.stringify(this.compra));
    this.loadDatosCompra();
  }

  quitarUno(id: number) {
    const index = this.compra.indexOf(id);
    if (index !== -1) {
      this.compra.splice(index, 1);
      localStorage.setItem('compra', JSON.stringify(this.compra));
      this.loadDatosCompra();
    }
  }

  eliminarProducto(id: number) {
    this.compra = this.compra.filter(p => p !== id);
    localStorage.setItem('compra', JSON.stringify(this.compra));
    this.loadDatosCompra();
  }

  calcularTotal(): number {
    let total = 0;
    for (let product of this.datosCompra) {
      total += this.contarProducto(product.id_product) * product.price;
    }
    return total;
  }



}
