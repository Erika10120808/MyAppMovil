import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar } from "@ionic/angular/standalone";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss']
})
export class PrincipalPage {
  constructor(private router: Router) {}

  irALogin() {
    this.router.navigate(['/login']);
  }

  irARegistro1() {
    this.router.navigate(['/registro1']);
  }
}

