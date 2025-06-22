import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
  standalone: false
})
export class CalendarioPage implements OnInit {
  calendarOptions: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.calendarOptions = {
      plugins: [dayGridPlugin, googleCalendarPlugin],
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek'
      },
      events: {
        googleCalendarApiKey: 'TU_API_KEY_DE_GOOGLE', 
        googleCalendarId: 'primary' 
      },
      dateClick: this.handleDateClick.bind(this)
    };
  }

  handleDateClick(info: any) {
    const title = prompt('Título del evento:');
    if (title) {
      alert(`(Simulado) Evento "${title}" creado para ${info.dateStr}`);
      
    }
  }

  irAPerfil() {
    this.router.navigate(['/perfil']);
  }

  irAConfiguracion() {
    this.router.navigate(['/configuracion']);
  }

  irAHome() {
    this.router.navigate(['/registro']);
  }

  volverLogin() {
  this.router.navigate(['/login']);
}
}

