import { Injectable } from '@angular/core';
import { Order } from '../componentes/models/order';
import { Product } from '../componentes/models/product';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: Order[] = [];

  constructor(private userService: UserService) {
    // Cargar pedidos de localStorage al iniciar
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
      this.orders = JSON.parse(savedOrders);
    }
  }
  

  createOrder(
    userId: string,
    items: {product: Product, quantity: number}[],
    shippingAddress: string,
    paymentMethod: string
  ): Order {
    const orderItems = items.map(item => ({
      productId: item.product.id_product,
      name: item.product.name,
      price: item.product.price,
      quantity: item.quantity
    }));

    const total = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

    const newOrder: Order = {
      id: this.generateId(),
      userId,
      items: orderItems,
      total,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
      shippingAddress,
      paymentMethod
    };

    this.orders.push(newOrder);
    this.saveOrders();
    
    // Añadir pedido al usuario
    const user = this.userService.getCurrentUser();
    if (user) {
      user.orders.push(newOrder.id);
      this.userService.updateUser(user);
    }

    return newOrder;
  }

  getOrdersByUser(userId: string): Order[] {
    return this.orders.filter(order => order.userId === userId);
  }

  getAllOrders(): Order[] {
    return this.orders;
  }

  getOrderById(id: string): Order | undefined {
    return this.orders.find(order => order.id === id);
  }

  updateOrderStatus(id: string, status: Order['status']) {
    const order = this.getOrderById(id);
    if (order) {
      order.status = status;
      order.updatedAt = new Date();
      this.saveOrders();
    }
  }

  updateTrackingNumber(id: string, trackingNumber: string) {
    const order = this.getOrderById(id);
    if (order) {
      order.trackingNumber = trackingNumber;
      order.updatedAt = new Date();
      this.saveOrders();
    }
  }

  private saveOrders() {
    localStorage.setItem('orders', JSON.stringify(this.orders));
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}
