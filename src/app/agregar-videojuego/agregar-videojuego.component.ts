import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TiendaVideojuegosService} from '../tienda-videojuegos.service';

@Component({
  selector: 'app-agregar-videojuego',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agregar-videojuego.component.html',
  styleUrl: './agregar-videojuego.component.css'
})

export class AgregarVideojuegoComponent {

  tiposVideojuego: string[] = ['Rol', 'Terror', 'FPS', 'TPS', 'Survival Horror', 'Aventura gráfica', 'RPG' ];

  tiposPlataforma: string[] = ['PC','PlayStation 5','Xbox Series X','Nintendo Switch'
  ,'PC VR','PlayStation 4','Xbox One','Nintendo 3DS','iOS','Android','Xbox 360',
  'PlayStation Vita','Game Boy','Sega Genesis','Atari',];

  constructor(private TiendaVideojuegosService : TiendaVideojuegosService){}

  
  addVideojuego(name: string, type: string, year: string, platform: string ) {

    this.TiendaVideojuegosService.addVideojuego({ name,type, year, platform });
  }
}
