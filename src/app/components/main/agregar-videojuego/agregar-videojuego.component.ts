import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiendaVideojuegosService } from '../../../services/tienda-videojuegos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-videojuego',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agregar-videojuego.component.html',
  styleUrl: './agregar-videojuego.component.css'
})

export class AgregarVideojuegoComponent {

  showModal: boolean = false;


  tiposVideojuego: string[] = ['Rol', 'Terror', 'FPS', 'TPS', 'Survival Horror', 'Aventura gráfica', 'RPG' ];

  tiposPlataforma: string[] = ['PC','PlayStation 5','Xbox Series X','Nintendo Switch'
  ,'PC VR','PlayStation 4','Xbox One','Nintendo 3DS','iOS','Android','Xbox 360',
  'PlayStation Vita','Game Boy','Sega Genesis','Atari',];
  

  constructor(private TiendaVideojuegosService : TiendaVideojuegosService, private router: Router){}

  
    // METODOS
  
  addVideojuego(name: string, type: string, year: string, platform: string, descripcion:string ) {

    this.TiendaVideojuegosService.addVideojuego(name,type, year, platform, descripcion);
    
    this.router.navigate(['list']);
  }

  openModal() {
    this.showModal = true;
  }

  // Función para cerrar el modal
  closeModal() {
    this.showModal = false;
  }
}
