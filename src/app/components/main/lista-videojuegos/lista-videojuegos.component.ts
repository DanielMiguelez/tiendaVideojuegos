import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { VideogameServiceService } from '../../../services/videogameService/videogame-service.service';

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
  
  constructor (
    private videogameService:VideogameServiceService,
    private router: Router
  ){}

  showModal: boolean = false;
  selectedIndex: number | null = null; 


  // metodo para añadir un videojuego

  ngOnInit(): void {
    this.cargarVideojuegos();
  }

  // Método para cargar los videojuegos desde la API
  cargarVideojuegos(): void {
    this.videogameService.getVideojuego().subscribe(
      (response: any) => {
        this.videojuegos = response.data;
        console.log(this.videojuegos);
      },
      (error) => {
        console.error('Error al cargar los videojuegos:', error);
      }
    );
  }

  deleteVideojuegoPro(): void {
    if (this.selectedIndex !== null) {
      const videojuegoId = this.selectedIndex; // Cambiado para usar el índice directamente
      this.videogameService.deleteVideojuego(videojuegoId).subscribe(
        () => {
          // Eliminar el videojuego de la lista local
          this.closeModal();
        },
        (error: any) => {
          console.error('Error al eliminar el videojuego:', error);
        }
      );
    }
  }
  
  verVideojuego(id:number){
    this.router.navigate(['/videojuego', id]);
  }

  /*editarVideojuego(id:number, name:string, type:string, year:string, platform:string, descripcion:string){
    this.TiendaVideojuegosService.editarVideojuego(id, name, type, year, platform, descripcion);
    this.router.navigate(['/editar_videojuego', id]);
    this.closeModal();
  }*/

  openModal(index:number){
    this.selectedIndex = index;
    this.showModal = true;
  }

  closeModal () : void{
    this.showModal = false;
    this.selectedIndex = null;
  }


}




