import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
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
  nivelEducacion: string = '';
  fechaNacimiento: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['usuario']) {
        this.usuario = params['usuario'];
      }
    });
  }

  mostrar() {
    alert(
      `Nombre: ${this.nombre}\nApellido: ${this.apellido}\nEducación: ${this.nivelEducacion}\nFecha de Nacimiento: ${this.fechaNacimiento}`
    );
  }

  limpiar() {
    this.nombre = '';
    this.apellido = '';
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

  irALogin() {
    this.router.navigate(['/login']);
  }

  irARegistro() {
    this.router.navigate(['/registro']);
  }
}
