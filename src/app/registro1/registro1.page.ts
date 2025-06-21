import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
selector: 'app-registro1',
templateUrl: './registro1.page.html',
styleUrls: ['./registro1.page.scss'],
standalone: false
})
export class Registro1Page implements OnInit {
usuario: string = '';
nombre: string = '';
apellido: string = '';
nivelEducacion: string = '';
fechaNacimiento: string = '';
correo: string = '';
contrasena: string = '';

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
this.correo = '';
this.contrasena = '';

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
