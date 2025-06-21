import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonInput } from "@ionic/angular/standalone";

@Component({
selector: 'app-registro',
templateUrl: './registro1.page.html',
styleUrls: ['./registro1.page.scss'],
})
export class RegistroPage {
nombre = '';
apellido = '';
nivelEducacion = '';
fechaNacimiento = '';
correo = '';
contrasena = '';

constructor(private router: Router) {}

mostrar() {
console.log('Nombre:', this.nombre);
console.log('Apellido:', this.apellido);
console.log('Nivel de Educación:', this.nivelEducacion);
console.log('Fecha de Nacimiento:', this.fechaNacimiento);
console.log('Correo:', this.correo);
console.log('Contraseña:', this.contrasena);
}

limpiar() {
this.nombre = '';
this.apellido = '';
this.nivelEducacion = '';
this.fechaNacimiento = '';
this.correo = '';
this.contrasena = '';
}

irALogin() {
this.router.navigate(['/login']);
}
}
