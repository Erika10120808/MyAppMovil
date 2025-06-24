import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: false
})
export class PerfilPage implements OnInit {
  nombre: string = '';
  apellido: string = '';
  nivelEducacion: string = '';
  fechaNacimiento: string = '';
  correo: string = '';
  contrasena: string = '';
  fotoPerfil: string | null = null;
  modoEditar: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    const datos = localStorage.getItem('datosUsuario');
    if (datos) {
      const usuario = JSON.parse(datos);
      this.nombre = usuario.nombre || '';
      this.apellido = usuario.apellido || '';
      this.nivelEducacion = usuario.nivelEducacion || '';
      this.fechaNacimiento = usuario.fechaNacimiento || '';
      this.correo = usuario.correo || '';
      this.contrasena = usuario.contrasena || '';
      this.fotoPerfil = usuario.fotoPerfil || null;
    }
  }

  habilitarEdicion() {
    this.modoEditar = true;
  }

  guardarCambios() {
    this.modoEditar = false;

    const datosUsuario = {
      nombre: this.nombre,
      apellido: this.apellido,
      nivelEducacion: this.nivelEducacion,
      fechaNacimiento: this.fechaNacimiento,
      correo: this.correo,
      contrasena: this.contrasena,
      fotoPerfil: this.fotoPerfil
    };
    localStorage.setItem('datosUsuario', JSON.stringify(datosUsuario));
    alert('Datos guardados exitosamente');
  }

  eliminarDatos() {
    this.nombre = '';
    this.apellido = '';
    this.nivelEducacion = '';
    this.fechaNacimiento = '';
    this.correo = '';
    this.contrasena = '';
    this.fotoPerfil = null;
    localStorage.removeItem('datosUsuario');
    alert('Datos eliminados');
  }

  volverCalendario() {
    this.router.navigate(['/calendario']);
  }
}
