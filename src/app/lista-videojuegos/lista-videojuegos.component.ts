import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-lista-videojuegos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-videojuegos.component.html',
  styleUrl: './lista-videojuegos.component.css'
})
export class ListaVideojuegosComponent {

  tiposVideojuego: string[] = ['Rol', 'Terror', 'FPS', 'TPS', 'Survival Horror', 'Aventura gráfica', 'RPG' ];

  // metodo para añadir un videojuego

 addVideojuego(name:string, type:string, year:number, platform:string){
    const yearNumber = Number(year);
   // this.TiendaVideojuegosService.addVideojuego({name, type, yearNumber ,platform})
  }







}




