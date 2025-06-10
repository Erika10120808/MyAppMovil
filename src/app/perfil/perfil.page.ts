import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from '../user-card.component';
import { FooterPersonalizadoComponent } from "../footer-personalizado.component";
import { HeaderPersonalizadoComponent } from "../header-personalizado.component";


@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FooterPersonalizadoComponent,
    UserCardComponent,
    HeaderPersonalizadoComponent
],
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {
  usuario = 'usuario_demo';
  nombre = 'Nombre de Ejemplo';
  email = 'correo@ejemplo.com';
}
