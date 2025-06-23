import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
selector: 'app-registro',
templateUrl: './registro.page.html',
styleUrls: ['./registro.page.scss'],
standalone: false,
})
export class RegistroPage implements OnInit {
nombre = '';
apellido = '';
nivelEducacion = '';
fechaNacimiento: string = '';
correo = '';
contrasena = '';
mostrarCalendario = false;

constructor(private router: Router) {}

ngOnInit(): void {

}

mostrarDatos(): void {
alert(
`Nombre: ${this.nombre}\nApellido: ${this.apellido}\nNivel: ${this.nivelEducacion}\nNacimiento: ${this.fechaNacimiento}\nCorreo: ${this.correo}`
);
}

limpiarCampos(): void {
this.nombre = '';
this.apellido = '';
this.nivelEducacion = '';
this.fechaNacimiento = '';
this.correo = '';
this.contrasena = '';
}

ocultarCalendario(): void {
this.mostrarCalendario = false;
}

guardarYIrAPerfil(): void {
const datosUsuario = {
    nombre: this.nombre,
    apellido: this.apellido,
    nivelEducacion: this.nivelEducacion,
    fechaNacimiento: this.fechaNacimiento,
    correo: this.correo,
    contrasena: this.contrasena
};

localStorage.setItem('datosUsuario', JSON.stringify(datosUsuario));
this.router.navigate(['/perfil']);
}


volverALogin(): void {
this.router.navigate(['/login']);
}

irALogin(): void {
this.router.navigate(['/login']);
}

mostrar(): void {
alert(
`Nombre: ${this.nombre}\nApellido: ${this.apellido}\nNivel de Educación: ${this.nivelEducacion}\nFecha de Nacimiento: ${this.fechaNacimiento}\nCorreo: ${this.correo}`
);
}

limpiar(): void {
this.nombre = '';
this.apellido = '';
this.nivelEducacion = '';
this.fechaNacimiento = '';
this.correo = '';
this.contrasena = '';
}
mostrarCalendarioFunc(): void {
this.mostrarCalendario = true;
}
}