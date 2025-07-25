import { Injectable } from '@angular/core';
import { User } from '../componentes/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];
  private currentUser: User | null = null;

  constructor() {
    // Cargar usuarios de localStorage al iniciar
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      this.users = JSON.parse(savedUsers);
    }
  }

  register(user: Omit<User, 'id' | 'createdAt' | 'orders'>): User {
    const newUser: User = {
      ...user,
      id: this.generateId(),
      createdAt: new Date(),
      orders: []
    };
    
    this.users.push(newUser);
    this.saveUsers();
    this.login(newUser.email, newUser.password);
    return newUser;
  }

  login(email: string, password: string): User | null {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      this.currentUser = user;
      localStorage.setItem('currentUser', JSON.stringify(user));
      return user;
    }
    return null;
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }

  getCurrentUser(): User | null {
    if (!this.currentUser) {
      const userJson = localStorage.getItem('currentUser');
      this.currentUser = userJson ? JSON.parse(userJson) : null;
    }
    return this.currentUser;
  }

  getUserById(id: string): User | undefined {
    return this.users.find(u => u.id === Number(id));
  }

  private saveUsers() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  private generateId(): number {
    return Date.now() + Math.floor(Math.random() * 10000);
  }
  updateUser(updatedUser: User): void {
    const index = this.users.findIndex(user => user.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = updatedUser;
      localStorage.setItem('users', JSON.stringify(this.users));
      if (this.currentUser && this.currentUser.id === updatedUser.id) {
        this.currentUser = updatedUser;
      }
    }
  }

}