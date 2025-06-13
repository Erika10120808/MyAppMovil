import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonContent, IonTitle } from "@ionic/angular/standalone";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: false
})
export class PrincipalPage {
  constructor(private router: Router) {}

  irALogin() {
    this.router.navigate(['/login']);
  }
}
