export interface User {
  orders: any;
  id: number;
  name: string;
  email: string;
  password: string; // En un caso real, esto debería ser un hash
  address: string;
  phone: string;
  createdAt: Date;
}