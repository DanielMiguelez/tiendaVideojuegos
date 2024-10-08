import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import {TiendaVideojuegosService} from '../tienda-videojuegos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-videojuegos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-videojuegos.component.html',
  styleUrl: './lista-videojuegos.component.css'
})

export class ListaVideojuegosComponent implements OnInit{

  tiposVideojuego: string[] = ['Rol', 'Terror', 'FPS', 'TPS', 'Survival Horror', 'Aventura gráfica', 'RPG' ];

  videojuegos: {id:number, name:string, type:string, year: string, platform: string} []= [];

  constructor (private TiendaVideojuegosService : TiendaVideojuegosService, private router: Router){  }

  // metodo para añadir un videojuego

  ngOnInit(): void {
    this.videojuegos = this.TiendaVideojuegosService.getVideojuegos();
  }

  deleteVideojuego(index:number){
    this.TiendaVideojuegosService.deleteVideojuego(index);
  }

  verVideojuego(id:number){
    this.router.navigate(['/videojuego', id]);
  }

}




