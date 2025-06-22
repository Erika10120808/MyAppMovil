import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('\\d{4}')]]
    });
  }

  ingresar() {
    if (this.loginForm.valid) {
      this.router.navigate(['/principal']);
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  }

  irAPerfil() {
    this.router.navigate(['/perfil']);
  }

  irAConfiguracion() {
    this.router.navigate(['/configuracion']);
  }

  irAHome() {
    this.router.navigate(['/registro']);
  }
}
