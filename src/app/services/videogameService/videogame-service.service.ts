import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Videojuego } from '../../models/videojuego';

@Injectable({
  providedIn: 'root'
})
export class VideogameServiceService {

  /*private baseUrl = 'http://192.168.0.111:80/api/daniel/videojuegos.php?table=videojuegos'; // Base URL*/

  private baseUrl = 'https://c74f4156107e.ngrok.app/api/daniel/videojuegos.php?table=videojuegos'; // Base URL
  
    constructor(private http: HttpClient) { }
  
    createVideojuego(videojuego: Videojuego): Observable<Videojuego> {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post<Videojuego>(this.baseUrl, videojuego, { headers });
    }
  
    deleteVideojuego(id: number): Observable<void> {
      const url = `${this.baseUrl}&id=${id}`;
      return this.http.delete<void>(url); 
    }
  
    updateVideojuego(id: number, data: Partial<Videojuego>): Observable<Videojuego> {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.put<Videojuego>(`${this.baseUrl}&id=${id}`, data, { headers });
    }

    getVideojuegos(): Observable<Videojuego[]> {
      return this.http.get<Videojuego[]>(this.baseUrl); // Devuelve todos los videojuegos
    }

    getVideojuego(nombre?: string): Observable<Videojuego[]> {
      const url = nombre ? `${this.baseUrl}&nombre=${nombre}` : `${this.baseUrl}`;
      return this.http.get<Videojuego[]>(url);
    }
}
