import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonHeader, IonButtons, IonInput, IonTitle } from "@ionic/angular/standalone";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  loginForm: FormGroup;
  usuario: any;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('\\d{4}'),
        ],
      ],
      correo: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
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
    this.router.navigate(['/registro1']);
  }
}
