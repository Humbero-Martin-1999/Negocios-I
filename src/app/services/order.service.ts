// src/app/services/order.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Order, OrderStatus } from '../componentes/models/order';
import { Product } from '../componentes/models/product';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: Order[] = [];
  private ordersSubject = new BehaviorSubject<Order[]>([]);
  public orders$ = this.ordersSubject.asObservable();

  constructor(private userService: UserService) {
    this.loadOrders();
    this.initializeSampleOrders();
  }

   private initializeSampleOrders() {
    // Si no hay pedidos guardados, crea algunos de ejemplo
    if (this.orders.length === 0) {
      const sampleOrders: Order[] = [
        {
          id: 'ord-1001',
          userId: 'user-001',
          items: [
            { productId: 1, name: 'Proteína Whey', price: 59.99, quantity: 2 },
            { productId: 3, name: 'Creatina', price: 19.99, quantity: 1 }
          ],
          total: 139.97,
          status: 'pending',
          createdAt: new Date('2023-05-15'),
          updatedAt: new Date('2023-05-15'),
          shippingAddress: 'Calle Principal 123, Ciudad',
          paymentMethod: 'tarjeta'
        },
        {
          id: 'ord-1002',
          userId: 'user-002',
          items: [
            { productId: 2, name: 'BCAA', price: 29.99, quantity: 1 },
            { productId: 4, name: 'Pre-entreno', price: 39.99, quantity: 3 }
          ],
          total: 149.96,
          status: 'shipped',
          createdAt: new Date('2023-05-10'),
          updatedAt: new Date('2023-05-12'),
          shippingAddress: 'Avenida Central 456, Ciudad',
          paymentMethod: 'paypal',
          trackingNumber: 'TRK123456789'
        },
        {
          id: 'ord-1003',
          userId: 'user-003',
          items: [
            { productId: 5, name: 'Glutamina', price: 24.99, quantity: 2 }
          ],
          total: 49.98,
          status: 'delivered',
          createdAt: new Date('2023-05-01'),
          updatedAt: new Date('2023-05-05'),
          shippingAddress: 'Boulevard Norte 789, Ciudad',
          paymentMethod: 'tarjeta',
          trackingNumber: 'TRK987654321'
        }
      ];

      this.orders = sampleOrders;
      this.saveOrders();
    }
  }

  private loadOrders() {
    const savedOrders = localStorage.getItem('orders');
    this.orders = savedOrders ? JSON.parse(savedOrders) : [];
    this.emitOrders();
  }

  private emitOrders() {
    this.ordersSubject.next([...this.orders]);
  }

  private saveOrders() {
    localStorage.setItem('orders', JSON.stringify(this.orders));
    this.emitOrders();
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
    
    const user = this.userService.getCurrentUser();
    if (user) {
      user.orders = user.orders || [];
      user.orders.push(newOrder.id);
      this.userService.updateUser(user);
    }

    return newOrder;
  }

  getOrdersByUser(userId: string): Order[] {
    return this.orders.filter(order => order.userId === userId);
  }

  getAllOrders(): Order[] {
    return [...this.orders];
  }

  getOrderById(id: string): Order | undefined {
    return this.orders.find(order => order.id === id);
  }

  updateOrderStatus(id: string, status: OrderStatus) {
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

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
  }
}