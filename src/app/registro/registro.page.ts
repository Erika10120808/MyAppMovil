import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registroForm = this.fb.group({
      usuario: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(8),
          Validators.pattern('[A-Za-z0-9]+'),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('\\d{4}'),
        ],
      ],
      confirmarPassword: ['', Validators.required],
    }, { validators: this.passwordsMatchValidator });
  }

  ngOnInit() {
  }

  passwordsMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmarPassword = form.get('confirmarPassword')?.value;
    return password === confirmarPassword ? null : { passwordMismatch: true };
  }

  registrar() {
    if (this.registroForm.valid) {
      // Aquí puedes manejar el registro, por ejemplo enviar los datos al backend
      alert('¡Registro exitoso!');
      this.registroForm.reset();
    } else {
      this.registroForm.markAllAsTouched();
    }
  }

}
