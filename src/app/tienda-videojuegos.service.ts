import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TiendaVideojuegosService {

  private storageKey = 'videojuegos';

  constructor() {

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
  }

  deleteVideojuego(index: number){
    this.videojuegos.splice(index, 1);
  }

}




