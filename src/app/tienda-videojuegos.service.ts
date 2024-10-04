import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TiendaVideojuegosService {

  private storageKey = 'videojuegos';

  constructor() {
      if(this.isLocalStorageAvailable()){
        const savedVideogames = localStorage.getItem(this.storageKey);
        if(savedVideogames){
          this.videojuegos = JSON.parse(savedVideogames);
        }
      }
   }

   videojuegos = [
    { name: 'Uncharted', type: 'Aventura', year: "2007", platform: 'PS3' },
    { name: 'Resident Evil', type: 'Terror', year: "1996", platform: 'PS1' },
    { name: 'Counter-Strike', type: 'FPS', year: "1999", platform: 'PC' },
    
  ];
// METODOS 

  getVideojuegos(){
    return this.videojuegos;
  }

  addVideojuego(videojuego :{name: string, type: string, year: string, platform: string}){
    
    
    this.videojuegos.push(videojuego);
    this.saveToLocalStorage();  
  }

  deleteVideojuego(index: number){
    this.videojuegos.splice(index, 1);
    this.saveToLocalStorage();  
  }

  private saveToLocalStorage(){
    localStorage.setItem(this.storageKey, JSON.stringify(this.videojuegos));
  }

  private isLocalStorageAvailable():boolean{
    try {
      return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
    } catch (e) {
      return false;
    }
  }

}




