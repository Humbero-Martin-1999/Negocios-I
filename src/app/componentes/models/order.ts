// src/app/componentes/models/order.ts
export interface OrderItem {
  productId: number;
  name: string;
  price: number;
  quantity: number;
}

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
export type OrderStatusFilter = OrderStatus | 'all';

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  total: number;
  status: OrderStatus;
  createdAt: Date;
  updatedAt: Date;
  shippingAddress: string;
  paymentMethod: string;
  trackingNumber?: string;
}