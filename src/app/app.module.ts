import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { provideAnimations } from '@angular/platform-browser/animations'; 
import { HttpClientModule } from '@angular/common/http';

import { SQLite } from '@ionic-native/sqlite/ngx';
import { DatabaseService } from './services/database.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideAnimations(), 
    SQLite,
    DatabaseService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
