import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  usuario: string = '';
  password: string = '';

  constructor(private router: Router) {}

  ingresar() {
    if (
      this.usuario.length >= 3 &&
      this.usuario.length <= 8 &&
      /^[0-9]{4}$/.test(this.password)
    ) {
      this.router.navigate(['/home'], {
        state: { usuario: this.usuario },
      });
    } else {
      alert('Revisa los datos ingresados.');
    }
  }
}

