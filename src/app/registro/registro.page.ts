import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false
})
export class RegistroPage {
  registroForm: FormGroup;
  mensaje: string = '';

  constructor(private fb: FormBuilder, private db: DatabaseService) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.pattern('\\d{4}')]]
    });
  }

  async registrar() {
    if (this.registroForm.valid) {
      try {
        await this.db.addUsuario(this.registroForm.value);
        this.mensaje = 'Usuario registrado correctamente';
        this.registroForm.reset();
      } catch (e) {
        this.mensaje = 'Error al registrar usuario o correo ya existe';
      }
    } else {
      this.mensaje = 'Completa todos los campos correctamente';
    }
  }
}
