import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FullCalendarModule } from '@fullcalendar/angular';


import { ConfiguracionPageRoutingModule } from './configuracion-routing.module';
import { ConfiguracionPage } from './configuracion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, 
    FullCalendarModule,
    ConfiguracionPageRoutingModule
    
  ],
  declarations: [ConfiguracionPage] //
})
export class ConfiguracionPageModule {}
