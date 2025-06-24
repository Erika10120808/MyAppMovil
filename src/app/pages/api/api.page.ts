import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
  standalone: false
})
export class ApiPage implements OnInit {

  posts: any[] = [];
  nuevoTitulo: string = '';
  nuevoContenido: string = '';

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarPosts();
  }

 
  cargarPosts(): void {
    this.apiService.getPosts().subscribe({
      next: data => {
        this.posts = data.slice(0, 5);
      },
      error: err => {
        alert(' Error al cargar publicaciones: ' + err.message);
      }
    });
  }

 
  agregarPost(): void {
    const nuevoPost = {
      title: this.nuevoTitulo.trim(),
      body: this.nuevoContenido.trim(),
      userId: 1
    };

    if (!nuevoPost.title || !nuevoPost.body) {
      alert(' Debes completar el título y el contenido');
      return;
    }

    this.apiService.addPost(nuevoPost).subscribe({
      next: post => {
        this.posts.unshift(post);
        this.nuevoTitulo = '';
        this.nuevoContenido = '';
        alert(' Post agregado correctamente');
      },
      error: err => {
        alert(' Error al agregar post: ' + err.message);
      }
    });
  }

  eliminarPost(id: number): void {
    if (confirm('¿Estás seguro de eliminar esta publicación?')) {
      this.apiService.deletePost(id).subscribe({
        next: () => {
          this.posts = this.posts.filter(p => p.id !== id);
          alert(' Post eliminado');
        },
        error: err => {
          alert(' Error al eliminar post: ' + err.message);
        }
      });
    }
  }


  volverALogin(): void {
    this.router.navigate(['/login']);
  }
}
