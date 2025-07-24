// admin.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../componentes/servicios/product.service';
import { Product } from '../../componentes/models/product';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule,FormsModule, NgFor, NgIf],
  providers: [CurrencyPipe],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: Product | null = null;
  newProduct: Product = {
    id_product: 0,
    name: '',
    price: 0,
    image: '',
    description: ''
  };

  constructor(
    private productService: ProductService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }

  addProduct() {
    this.productService.addProduct(this.newProduct);
    this.products = this.productService.getProducts();
    this.resetForm();
  }

  editProduct(product: Product) {
    this.selectedProduct = { ...product };
  }

  updateProduct() {
    if (this.selectedProduct) {
      this.productService.updateProduct(this.selectedProduct);
      this.products = this.productService.getProducts();
      this.selectedProduct = null;
    }
  }

  deleteProduct(id: number) {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      this.productService.deleteProduct(id);
      this.products = this.productService.getProducts();
      if (this.selectedProduct && this.selectedProduct.id_product === id) {
        this.selectedProduct = null;
      }
    }
  }

  resetForm() {
    this.newProduct = {
      id_product: 0,
      name: '',
      price: 0,
      image: '',
      description: ''
    };
  }

  get currentProduct() {
    return this.selectedProduct || this.newProduct;
  }
}