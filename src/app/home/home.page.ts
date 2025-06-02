import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule
  ],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  usuario: string = '';
  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  password: string = '';
  nivelEducacion: string = '';
  fechaNacimiento: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['usuario']) {
        this.usuario = params['usuario'];
      } else {
        alert('No se ha iniciado sesión correctamente. Serás redirigido al Login.');
        this.router.navigate(['/login']);
      }
    });
  }

  mostrar() {
    alert(
      `Nombre: ${this.nombre}\nApellido: ${this.apellido}\nCorreo: ${this.correo}\nContraseña: ${this.password}\nEducación: ${this.nivelEducacion}\nFecha de Nacimiento: ${this.fechaNacimiento}`
    );
  }

  limpiar() {
    this.nombre = '';
    this.apellido = '';
    this.correo = '';
    this.password = '';
    this.nivelEducacion = '';
    this.fechaNacimiento = '';

    const nombreInput = document.querySelector('#nombreInput');
    const apellidoInput = document.querySelector('#apellidoInput');

    if (nombreInput) {
      nombreInput.classList.remove('animate-input');
      void (nombreInput as HTMLElement).offsetWidth;
      nombreInput.classList.add('animate-input');
    }
    if (apellidoInput) {
      apellidoInput.classList.remove('animate-input');
      void (apellidoInput as HTMLElement).offsetWidth;
      apellidoInput.classList.add('animate-input');
    }
  }

  volverLogin() {
    this.router.navigate(['/login']);
  }

  irARegistrar() {
    this.router.navigate(['/login']);
  }
}
