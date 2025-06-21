import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { Registro1Page } from './registro1.page';
import { Registro1PageRoutingModule } from './registro1-routing.module';

@NgModule({
imports: [
CommonModule,
FormsModule,
IonicModule,
Registro1PageRoutingModule
],
declarations: [
Registro1Page
]
})
export class Registro1PageModule {}
