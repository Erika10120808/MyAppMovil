import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
providedIn: 'root'
})
export class ApiService {
private API_URL = 'https://jsonplaceholder.typicode.com/posts'; 

constructor(private http: HttpClient) {}


getPosts(): Observable<any[]> {
return this.http.get<any[]>(this.API_URL).pipe(
    retry(2),
    catchError(this.handleError)
);
}


addPost(post: any): Observable<any> {
return this.http.post<any>(this.API_URL, post).pipe(
    catchError(this.handleError)
);
}


deletePost(id: number): Observable<any> {
return this.http.delete<any>(`${this.API_URL}/${id}`).pipe(
    catchError(this.handleError)
);
}


private handleError(error: HttpErrorResponse) {
let msg = 'Error desconocido';
if (error.error instanceof ErrorEvent) {
    msg = `Error del lado del cliente: ${error.error.message}`;
} else {
    msg = `Error del servidor: Código ${error.status}, mensaje: ${error.message}`;
}
console.error(msg);
return throwError(() => new Error(msg));
}
}
