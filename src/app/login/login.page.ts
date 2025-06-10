import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, NavigationExtras, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;
usuario: any;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      usuario: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(8),
          Validators.pattern('[A-Za-z0-9]+'),
        ],
      ],
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
    this.router.navigate(['/home']);
  }
}
