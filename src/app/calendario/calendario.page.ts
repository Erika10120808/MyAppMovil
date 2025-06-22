import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; 

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
  standalone: false
})
export class CalendarioPage implements OnInit {
  calendarOptions: any; 
  eventos: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    
    const eventosGuardados = localStorage.getItem('eventosCalendario');
    if (eventosGuardados) {
      this.eventos = JSON.parse(eventosGuardados);
    }

  
    this.calendarOptions = {
      plugins: [dayGridPlugin, interactionPlugin],
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek'
      },
      events: this.eventos,
      dateClick: this.handleDateClick.bind(this)
    };
  }

  
  handleDateClick(info: any) {
    const title = prompt('¿Qué deseas agendar para este día?');
    if (title) {
      const nuevoEvento = {
        title,
        start: info.dateStr,
        allDay: true
      };

      this.eventos.push(nuevoEvento);
      localStorage.setItem('eventosCalendario', JSON.stringify(this.eventos));

      
      this.calendarOptions.events = [...this.eventos]; 
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
