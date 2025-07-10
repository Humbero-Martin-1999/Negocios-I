import { Component } from '@angular/core';
import { ProductService } from '../../servicios/product.service';
import { Product } from '../../models/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  imports: [RouterLink],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent {

  userInfo: any = {};
  productos: Product[] = [];
  compra: number[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    const data = localStorage.getItem('confirmacion');
    this.userInfo = data ? JSON.parse(data) : {};

    this.compra = this.productService.getCompra(); // Aunque ya se limpió, por si quieres probar antes
    this.productos = this.productService.getProducts().filter(p =>
      this.compra.includes(p.id_product)
    );
  }

  contarProducto(id: number): number {
    return this.compra.filter(p => p === id).length;
  }

  total(): number {
    return this.productos.reduce((sum, prod) => sum + (prod.price * this.contarProducto(prod.id_product)), 0);
  }

}
