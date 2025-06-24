import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  standalone: false
})
export class ConfiguracionPage {
  ubicacionActiva: boolean = false;
  notificacionesActivas: boolean = false;
  dispositivoActivo: boolean = false;

  constructor(private router: Router) {}

  volverACalendario() {
    this.router.navigate(['/calendario']);
  }

  async solicitarPermisoUbicacion() {
    if (this.ubicacionActiva && 'geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          alert(`Ubicación actual:\nLat: ${position.coords.latitude}\nLng: ${position.coords.longitude}`);
        },
        (error) => {
          alert('Permiso denegado o error al obtener ubicación');
          this.ubicacionActiva = false;
        }
      );
    }
  }

  async solicitarNotificaciones() {
    if (this.notificacionesActivas && 'Notification' in window) {
      const permiso = await Notification.requestPermission();
      if (permiso === 'granted') {
        new Notification('¡Notificaciones activadas!');
      } else {
        alert('Permiso de notificaciones denegado');
        this.notificacionesActivas = false;
      }
    }
  }

  usarDispositivo() {
    if (this.dispositivoActivo && 'vibrate' in navigator) {
      navigator.vibrate(200);
      alert('Vibración activada por 200ms (simulación)');
    } else if (!this.dispositivoActivo) {
      alert('Funcionalidad desactivada');
    } else {
      alert('Tu dispositivo no permite esta funcionalidad');
      this.dispositivoActivo = false;
    }
  }
}
