import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  modoEditar: boolean = false;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.nombre = params['nombre'] || '';
      this.apellido = params['apellido'] || '';
      this.nivelEducacion = params['nivelEducacion'] || '';
      this.fechaNacimiento = params['fechaNacimiento'] || '';
      this.correo = params['correo'] || '';
      this.contrasena = params['contrasena'] || '';
    });
  }

  habilitarEdicion() {
    this.modoEditar = true;
  }

  guardarCambios() {
    this.modoEditar = false;
    alert('Cambios guardados');
  }

  eliminarDatos() {
    this.nombre = '';
    this.apellido = '';
    this.nivelEducacion = '';
    this.fechaNacimiento = '';
    this.correo = '';
    this.contrasena = '';
  }

  volverCalendario() {
  this.router.navigate(['/calendario']);
}

}
