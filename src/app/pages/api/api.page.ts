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

  ngOnInit() {
    this.cargarPosts();
  }

  cargarPosts() {
    this.apiService.getPosts().subscribe(data => {
      this.posts = data.slice(0, 5); 
    });
  }

  agregarPost() {
    const nuevoPost = {
      title: this.nuevoTitulo,
      body: this.nuevoContenido,
      userId: 1
    };

    this.apiService.addPost(nuevoPost).subscribe(post => {
      this.posts.unshift(post); 
      this.nuevoTitulo = '';
      this.nuevoContenido = '';
    });
  }

  eliminarPost(id: number) {
    this.apiService.deletePost(id).subscribe(() => {
      this.posts = this.posts.filter(p => p.id !== id);
    });
  }

  volverALogin() {
    this.router.navigate(['/login']);
  }
}

