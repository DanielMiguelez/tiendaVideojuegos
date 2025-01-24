import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideogameServiceService {

  private baseUrl = 'http://192.168.0.111:80/api/daniel/videojuegos.php?table=videojuegos'; // Base URL
  
    constructor(private http: HttpClient) { }
  
    createVideojuego(videojuego: any): Observable<any> {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post(this.baseUrl, videojuego, { headers });
    }

    deleteVideojuego(id:number):Observable<void> {
      return this.http.delete<void>(`${this.baseUrl}&id=${id}`); 
    }

    updateVideojuego(id: number, data: Partial<any>): Observable<any> {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.put(`${this.baseUrl}&id=${id}`, data, { headers });
    }

    getVideojuego(nombre?: string): Observable<any> {
      const url = nombre ? `${this.baseUrl}&nombre=${nombre}` : `${this.baseUrl}`;
      return this.http.get(url);
    }
}
