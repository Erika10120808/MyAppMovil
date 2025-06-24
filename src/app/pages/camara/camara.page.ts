import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
  standalone: false
})
export class CamaraPage {
  fotoBase64: string | null = null;

  constructor() {}

  async tomarFoto() {
    const imagen = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera
    });

    this.fotoBase64 = `data:image/jpeg;base64,${imagen.base64String}`;
  }
}
