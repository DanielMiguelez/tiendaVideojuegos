import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { TiendaVideojuegosService } from '../../../services/tienda-videojuegos.service';



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

  showModal: boolean = false;

  selectedIndex: number | null = null;


  // metodo para añadir un videojuego

  ngOnInit(): void {
    this.videojuegos = this.TiendaVideojuegosService.getVideojuegos();
  }

  deleteVideojuego(){
    if(this.selectedIndex !== null){
      this.TiendaVideojuegosService.deleteVideojuego(this.selectedIndex);
      this.videojuegos = this.TiendaVideojuegosService.getVideojuegos();
      this.closeModal();
    }
  }

  verVideojuego(id:number){
    this.router.navigate(['/videojuego', id]);
  }

  editarVideojuego(id:number, name:string, type:string, year:string, platform:string, descripcion:string){
    this.TiendaVideojuegosService.editarVideojuego(id, name, type, year, platform, descripcion);
    this.router.navigate(['/editar_videojuego', id]);
    this.closeModal();
  }

  openModal(index:number){
    this.selectedIndex = index;
    this.showModal = true;
  }

  closeModal () : void{
    this.showModal = false;
    this.selectedIndex = null;
  }


}




