import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: false
})
export class PerfilPage implements OnInit {
  nombre = '';
  apellido = '';
  nivelEducacion = '';
  fechaNacimiento = '';
  correo = '';
  contrasena = '';
  modoEditar = false;

  constructor(private router: Router) {}

  ngOnInit() {
    const datos = localStorage.getItem('registroUsuario');
    if (datos) {
      const usuario = JSON.parse(datos);
      this.nombre = usuario.nombre;
      this.apellido = usuario.apellido;
      this.nivelEducacion = usuario.nivelEducacion;
      this.fechaNacimiento = usuario.fechaNacimiento;
      this.correo = usuario.correo;
      this.contrasena = usuario.contrasena;
    }
  }

  habilitarEdicion() {
    this.modoEditar = true;
  }

  guardarCambios() {
    const datosActualizados = {
      nombre: this.nombre,
      apellido: this.apellido,
      nivelEducacion: this.nivelEducacion,
      fechaNacimiento: this.fechaNacimiento,
      correo: this.correo,
      contrasena: this.contrasena
    };
    localStorage.setItem('registroUsuario', JSON.stringify(datosActualizados));
    this.modoEditar = false;
    alert('Datos actualizados correctamente.');
  }

  eliminarDatos() {
    localStorage.removeItem('registroUsuario');
    this.router.navigate(['/registro']);
  }

  volverLogin() {
  this.router.navigate(['/login']);
}

}
