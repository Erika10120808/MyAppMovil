import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
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

  constructor(private menuCtrl: MenuController, private router: Router) {}

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

  async navegarA(ruta: string) {
    await this.menuCtrl.close();
    (document.activeElement as HTMLElement)?.blur(); 
    this.router.navigate([ruta]);
  }
}
