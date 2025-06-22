import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader } from "@ionic/angular/standalone";

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  
})
export class ConfiguracionPage {
  constructor(private router: Router) {}

  irALogin() {
    this.router.navigate(['/login']);
  }
}
