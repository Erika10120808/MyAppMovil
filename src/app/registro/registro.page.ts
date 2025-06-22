import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
selector: 'app-registro',
templateUrl: './registro.page.html',
styleUrls: ['./registro.page.scss'],
standalone: false
})
export class RegistroPage implements OnInit {
usuario: string = '';
nombre: string = '';
apellido: string = '';
nivelEducacion: string = '';
fechaNacimiento: any = '';
correo: string = '';
contrasena: string = '';
mostrarCalendario: boolean = false;

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

irACalendario() {

this.router.navigate(['/perfil'], {
    queryParams: {
    nombre: this.nombre,
    apellido: this.apellido,
    nivelEducacion: this.nivelEducacion,
    fechaNacimiento: this.fechaNacimiento,
    correo: this.correo,
    contrasena: this.contrasena
    }
});
}

ocultarCalendario() {
this.mostrarCalendario = false;
}
}
