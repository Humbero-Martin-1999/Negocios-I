export interface Order {
  id: string;
  userId: string;
  items: {
    productId: number;
    name: string;
    price: number;
    quantity: number;
  }[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
  shippingAddress: string;
  paymentMethod: string;
  trackingNumber?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
  createdAt: Date;
  orders: string[]; // IDs de pedidos
}