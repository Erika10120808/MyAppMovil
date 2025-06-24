import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
providedIn: 'root'
})
export class ApiService {
private API_URL = 'https://jsonplaceholder.typicode.com/posts';

private httpOptions = {
headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Custom-Header': 'MiAppHeader'
})
};

constructor(private http: HttpClient) {}

getPosts(): Observable<any[]> {
return this.http.get<any[]>(this.API_URL, this.httpOptions).pipe(
    retry(2),
    catchError(this.handleError)
);
}

addPost(post: any): Observable<any> {
return this.http.post<any>(this.API_URL, post, this.httpOptions).pipe(
    catchError(this.handleError)
);
}

deletePost(id: number): Observable<any> {
return this.http.delete<any>(`${this.API_URL}/${id}`, this.httpOptions).pipe(
    catchError(this.handleError)
);
}

private handleError(error: HttpErrorResponse) {
let mensaje = 'Error desconocido';
if (error.error instanceof ErrorEvent) {
    mensaje = `Error del cliente: ${error.error.message}`;
} else {
    mensaje = `Error del servidor (Código ${error.status}): ${error.message}`;
}

console.error('[ApiService]', mensaje);
return throwError(() => new Error(mensaje));
}
}
