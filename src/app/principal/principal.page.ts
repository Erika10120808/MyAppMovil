import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: false
})
export class PrincipalPage {
  nombre: string = '';

  constructor(private router: Router) {}

  irALogin() {
    this.router.navigate(['/login']);
  }

  irARegistro1() {
    this.router.navigate(['/registro']);
  }

  guardarNombre() {
    console.log('Nombre ingresado:', this.nombre);
  }
}
