import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAdmin = false;

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      this.isAdmin = true;
      localStorage.setItem('isAdmin', 'true');
      return true;
    }
    return false;
  }

  logout() {
    this.isAdmin = false;
    localStorage.removeItem('isAdmin');
    this.router.navigate(['/login']);
  }

  isAdminAuthenticated(): boolean {
    return this.isAdmin || localStorage.getItem('isAdmin') === 'true';
  }
}