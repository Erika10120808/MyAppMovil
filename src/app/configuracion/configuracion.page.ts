import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  standalone: false
})
export class ConfiguracionPage {
  calendarOptions: any = {
    initialView: 'dayGridMonth',
    plugins: [],
    events: []
  };

  constructor(private router: Router) {}

  irALogin() {
    this.router.navigate(['/login']);
  }

  volverACalendario() {
    this.router.navigate(['/calendario']);
  }

  irACalendario() {
    this.router.navigate(['/calendario']);
  }

  async solicitarPermisoUbicacion() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          alert(`Ubicación actual:\nLat: ${position.coords.latitude}\nLng: ${position.coords.longitude}`);
        },
        (error) => {
          alert('Permiso denegado o error al obtener ubicación');
        }
      );
    } else {
      alert('Tu dispositivo no soporta geolocalización');
    }
  }

  async solicitarNotificaciones() {
    if ('Notification' in window) {
      const permiso = await Notification.requestPermission();
      if (permiso === 'granted') {
        new Notification('¡Notificaciones activadas!');
      } else {
        alert('Permiso de notificaciones denegado');
      }
    } else {
      alert('Tu navegador no soporta notificaciones');
    }
  }

  usarDispositivo() {
    if ('vibrate' in navigator) {
      navigator.vibrate(200);
      alert('Vibración activada por 200ms (simulación de funcionalidad)');
    } else {
      alert('Tu dispositivo no permite esta funcionalidad');
    }
  }
}
