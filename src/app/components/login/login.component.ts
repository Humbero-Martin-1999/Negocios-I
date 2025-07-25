// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  // ... otros métodos ...

  goToRegister() {
    this.router.navigate(['/register'])
      .then(success => {
        if (!success) {
          console.error('Error: No se pudo navegar a /register');
          // Opcional: Redirigir a una página de error o mostrar mensaje
          this.error = 'No se pudo acceder al registro. Intente nuevamente.';
        }
      })
      .catch(err => {
        console.error('Error de navegación:', err);
        this.error = 'Error al acceder al registro';
      });
  }
  onSubmit() {
    if (!this.username.trim() || !this.password.trim()) {
      this.error = 'Por favor ingresa usuario y contraseña';
      return;
    }

    if (this.auth.login(this.username, this.password)) {
      this.router.navigate(['/admin']);
    } else {
      this.error = 'Usuario o contraseña incorrectos';
    }
  }
  }