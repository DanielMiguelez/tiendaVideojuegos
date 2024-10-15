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
    { id: 1, name: 'Uncharted', type: 'Aventura', year: "2007", platform: 'PS3' , descripcion:''},
    { id:2, name: 'Resident Evil', type: 'Terror', year: "1996", platform: 'PS1', descripcion:''},
    { id:3, name: 'Counter-Strike', type: 'FPS', year: "1999", platform: 'PC' , descripcion:''},

  ];

  // crear array de imagenes

// METODOS 

getItemById(id: number): any {

  const videojuego = this.videojuegos.find(videojuego => videojuego.id === id);
  
  return videojuego;  // Puede ser undefined si no se encuentra
}


  getVideojuegos(){
    return this.videojuegos;
  }

  addVideojuego( name: string, type: string, year: string, platform: string, descripcion:string){
    
    const newId = this.videojuegos.length > 0 ? Math.max(...this.videojuegos.map(videojuego => videojuego.id)) + 1 : 1;

    const videojuego = {id:newId, name, type, year, platform, descripcion};

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




