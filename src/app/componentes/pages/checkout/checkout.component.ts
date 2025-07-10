import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartComponent } from '../cart/cart.component';
import { ProductService } from '../../servicios/product.service';
import { Product } from '../../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  imports: [FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

  formData = {
    nombre: '',
    email: '',
    direccion: '',
    tarjeta: '',
    exp: '',
    cvv: ''
  };

  productos: Product[] = [];
  compra: number[] = [];

  constructor(private productService: ProductService, private router:Router) {}

  ngOnInit() {
    this.compra = this.productService.getCompra();
    this.productos = this.productService.getProducts().filter(p =>
      this.compra.includes(p.id_product)
    );
  }

  contarProducto(id: number): number {
    return this.compra.filter(p => p === id).length;
  }

  calcularTotal(): number {
    return this.productos.reduce((acc, producto) => {
      return acc + producto.price * this.contarProducto(producto.id_product);
    }, 0);
  }

  confirmarPago() {
    if (
      this.formData.nombre &&
      this.formData.email &&
      this.formData.direccion &&
      this.formData.tarjeta &&
      this.formData.exp &&
      this.formData.cvv
    ) {
      localStorage.setItem('confirmacion', JSON.stringify(this.formData));
      this.router.navigate(['/confirmacion'])
      alert('Pago procesado con éxito. ¡Gracias por tu compra!');
    } else {
      alert(' Por favor, llena todos los campos.');
    }
  }

}
