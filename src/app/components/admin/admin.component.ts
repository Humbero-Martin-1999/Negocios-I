// src/app/components/admin/admin.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../componentes/servicios/product.service';
import { OrderService } from '../../services/order.service';
import { Product } from '../../componentes/models/product';
import { Order, OrderStatus, OrderStatusFilter } from '../../componentes/models/order';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CurrencyPipe,
    DatePipe
  ],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  // Sección de Productos
  products: Product[] = [];
  selectedProduct: Product | null = null;
  newProduct: Product = {
    id_product: 0,
    name: '',
    price: 0,
    image: '',
    description: ''
  };

  // Sección de Pedidos
  orders: Order[] = [];
  filteredOrders: Order[] = [];
  selectedOrder: Order | null = null;
  statusFilter: OrderStatusFilter = 'all';
  activeTab: 'products' | 'orders' = 'products';

  statusOptions: OrderStatusFilter[] = [
    'all',
    'pending',
    'processing',
    'shipped',
    'delivered',
    'cancelled'
  ];

  constructor(
    private productService: ProductService,
    private orderService: OrderService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadProducts();
    this.loadOrders();
  }

  // Métodos para Productos
  loadProducts() {
    this.products = this.productService.getProducts();
  }

  addProduct() {
    this.productService.addProduct(this.newProduct);
    this.loadProducts();
    this.resetProductForm();
  }

  editProduct(product: Product) {
    this.selectedProduct = { ...product };
  }

  updateProduct() {
    if (this.selectedProduct) {
      this.productService.updateProduct(this.selectedProduct);
      this.loadProducts();
      this.selectedProduct = null;
    }
  }

  deleteProduct(id: number) {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      this.productService.deleteProduct(id);
      this.loadProducts();
      if (this.selectedProduct?.id_product === id) {
        this.selectedProduct = null;
      }
    }
  }

  resetProductForm() {
    this.newProduct = {
      id_product: 0,
      name: '',
      price: 0,
      image: '',
      description: ''
    };
  }

  // Métodos para Pedidos
  loadOrders() {
    this.orders = this.orderService.getAllOrders();
    this.applyOrderFilter();
  }

  applyOrderFilter() {
    if (this.statusFilter === 'all') {
      this.filteredOrders = [...this.orders];
    } else {
      this.filteredOrders = this.orders.filter(order => order.status === this.statusFilter);
    }
  }

  viewOrderDetails(order: Order) {
    this.selectedOrder = order;
  }

  updateOrderStatus(order: Order, newStatus: OrderStatus) {
    this.orderService.updateOrderStatus(order.id, newStatus);
    this.loadOrders();
    if (this.selectedOrder?.id === order.id) {
      this.selectedOrder.status = newStatus;
    }
  }

  updateTrackingNumber(order: Order) {
    if (this.selectedOrder && this.selectedOrder.trackingNumber) {
      this.orderService.updateTrackingNumber(order.id, this.selectedOrder.trackingNumber);
      this.loadOrders();
    }
  }

  // Métodos generales
  switchTab(tab: 'products' | 'orders') {
    this.activeTab = tab;
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }

  get currentProduct() {
    return this.selectedProduct || this.newProduct;
  }
}