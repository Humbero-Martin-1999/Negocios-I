import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]

})

export class RegisterComponent {
  username: string = '';
  error: string = '';
  success: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  onSubmit() {
    if (!this.username.trim()) {
      this.error = 'Por favor ingresa un nombre de usuario';
      return;
    }

    const newUser = {
      id: Date.now(), // Generamos un ID único
      username: this.username,
      createdAt: new Date().toISOString()
    };

    // Guardar en el JSON local
    this.saveToJson(newUser);
  }

  private saveToJson(user: any) {
    // Primero leemos los usuarios existentes
    this.http.get('assets/users.json').subscribe({
      next: (existingUsers: any) => {
        const usersArray = existingUsers.users || [];
        usersArray.push(user);
        
        // Actualizamos el JSON
        this.updateJsonFile(usersArray);
      },
      error: () => {
        // Si el archivo no existe, creamos uno nuevo
        this.updateJsonFile([user]);
      }
    });
  }

  private updateJsonFile(users: any[]) {
    const data = { users };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    
    // Aquí normalmente enviarías esto a un backend
    // Para propósitos de demostración, mostramos cómo sería:
    this.success = `Usuario ${this.username} registrado correctamente!`;
    this.error = '';
    this.username = '';
    
    console.log('Usuario a guardar:', data);
    // En una aplicación real, aquí harías una petición HTTP a tu backend
  }
   
}

