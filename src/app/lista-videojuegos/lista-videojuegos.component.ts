import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import {TiendaVideojuegosService} from '../tienda-videojuegos.service';



@Component({
  selector: 'app-lista-videojuegos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-videojuegos.component.html',
  styleUrl: './lista-videojuegos.component.css'
})

export class ListaVideojuegosComponent implements OnInit{

  tiposVideojuego: string[] = ['Rol', 'Terror', 'FPS', 'TPS', 'Survival Horror', 'Aventura gráfica', 'RPG' ];

  videojuegos: {name:string, type:string, year: string, platform: string} []= [];

  constructor (private TiendaVideojuegosService : TiendaVideojuegosService){  }

  // metodo para añadir un videojuego

  ngOnInit(): void {
    this.videojuegos = this.TiendaVideojuegosService.getVideojuegos();
  }

  deleteVideojuego(index:number){
    this.TiendaVideojuegosService.deleteVideojuego(index);
  }

}




