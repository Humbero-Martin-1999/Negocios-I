import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  contactoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
      asunto: ['', Validators.required],
      mensaje: ['', [Validators.required, Validators.minLength(10)]],
      aceptarTerminos: [false, Validators.requiredTrue]
    });
  }

  get f() {
    return this.contactoForm.controls;
  }

  enviar() {
    if (this.contactoForm.invalid) {
      this.contactoForm.markAllAsTouched();
      return;
    }
    // Aquí iría la lógica para enviar el formulario (API, email, etc.)
    alert('Formulario enviado correctamente. ¡Gracias por contactarnos!');
    this.contactoForm.reset();
  }
}
