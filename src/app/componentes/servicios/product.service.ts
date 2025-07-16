import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product';
import productData from './product.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  products: Product[] = productData;
  private searchResults = this.products; 

  getProducts() {
    return this.products;
  }

  searchProduct(term: string): Product[] {
    const filteredProduct = this.products.filter(
      (product) =>+
              product.name.toLowerCase().includes(term.toLowerCase())
    );
    this.searchResults = filteredProduct;
    return this.searchResults;
  }

  getCompra(): number[] {
    const compraString = localStorage.getItem('compra');
    const compra = compraString ? JSON.parse(compraString) : [];

    this.count.set(compra.length); 
    return compra;
  }

  addToCompra(id: number) {
    this.incremento();
    const compra = this.getCompra();
    compra.push(id);
    localStorage.setItem('compra', JSON.stringify(compra));

  }

  removeFromFavorites(id: number) {
    this.decremento();
    const compra = this.getCompra();
    const updateProductos = compra.filter(id_product => id_product !== id);
    localStorage.setItem('compra', JSON.stringify(updateProductos));
  }


  private count = signal<number>(0);

  getCounter() {
    return this.count;
  }

  incremento() {
    this.count.update(n => n + 1);
  }

  decremento() {
    this.count.update(n => n - 1);
  }

}
