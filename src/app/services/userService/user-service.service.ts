import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class UserServiceService {
  private baseUrl = 'https://c74f4156107e.ngrok.app/api/daniel/videojuegos.php?table=usuarios'; // Base URL

  constructor(private http: HttpClient) { }

  createUser(usuario: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.baseUrl}usuarios`, usuario, { headers });
  }

  deleteUser(id:number):Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}usuarios/${id}`);
  }

  updateUser(id:number, data:Partial<any>):Observable<any>{
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.put(`${this.baseUrl}usuarios/${id}`, data, { headers });
  }

  /*getUser(nombre?:string):Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(`${this.baseUrl}usuarios?nombre=${nombre}`, {headers})
  }*/

    getUser(nombre?: string): Observable<any> {
      const url = nombre ? `${this.baseUrl}usuarios?nombre=${nombre}` : `${this.baseUrl}usuarios`;
      return this.http.get(url);
    }

    
}

