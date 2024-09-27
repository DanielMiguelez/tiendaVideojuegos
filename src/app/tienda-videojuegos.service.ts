import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TiendaVideojuegosService {

  private storageKey = 'videojuegos';

  constructor() {

   }

   videojuegos = [
    { name: 'Uncharted', type: 'Aventura', year: 2007, platform: 'PS3' },
    { name: 'Resident Evil', type: 'Terror', year: 1996, platform: 'PS1' },
    { name: 'Counter-Strike', type: 'FPS', year: 1999, platform: 'PC' },
    { name: 'The Witcher 3', type: 'RPG', year: 2015, platform: 'PC, PS4, Xbox One' },
    { name: 'Dark Souls', type: 'RPG', year: 2011, platform: 'PS3, Xbox 360' },
    { name: 'The Legend of Zelda: Breath of the Wild', type: 'Aventura', year: 2017, platform: 'Switch' },
    { name: 'Overwatch', type: 'FPS', year: 2016, platform: 'PC, PS4, Xbox One' },
    { name: 'Silent Hill 2', type: 'Survival Horror', year: 2001, platform: 'PS2' },
    { name: 'God of War', type: 'Aventura', year: 2005, platform: 'PS2' },
    { name: 'Doom', type: 'FPS', year: 1993, platform: 'PC' }
  ];




// METODOS 

  getVideojuegos(){
    return this.videojuegos;
  }

  addVideojuego(videojuego :{name: string, type: string, year: number, platform: string}){
    this.videojuegos.push(videojuego);
  }

  deleteComponent(index: number){
    this.videojuegos.splice(index, 1);
  }

}




