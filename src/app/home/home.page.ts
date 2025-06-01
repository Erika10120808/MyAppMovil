import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  usuario: string = '';
  nombre: string = '';
  apellido: string = '';
  nivelEducacion: string = '';
  fechaNacimiento: string = '';

  constructor(private route: ActivatedRoute) {}

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

    // Aplica la animación de izquierda a derecha
    const nombreInput = document.querySelector('#nombreInput');
    const apellidoInput = document.querySelector('#apellidoInput');

    if (nombreInput) {
      nombreInput.classList.remove('animate-input');
      void (nombreInput as HTMLElement).offsetWidth; // Forzar reinicio
      nombreInput.classList.add('animate-input');
    }
    if (apellidoInput) {
      apellidoInput.classList.remove('animate-input');
      void (apellidoInput as HTMLElement).offsetWidth;
      apellidoInput.classList.add('animate-input');
    }
  }
}
