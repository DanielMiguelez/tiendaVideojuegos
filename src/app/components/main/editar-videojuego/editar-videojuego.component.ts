import { Component } from '@angular/core';
import { TiendaVideojuegosService } from '../../../services/tienda-videojuegos.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-editar-videojuego',
  standalone: true,
  imports: [],
  templateUrl: './editar-videojuego.component.html',
  styleUrl: './editar-videojuego.component.css'
})
export class EditarVideojuegoComponent {

  videojuego : any ={};

  constructor(private route: ActivatedRoute, 
  private tiendaVideojuegosService : TiendaVideojuegosService, 
  private router: Router
) {}
  

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!; 
    const videojuego = this.tiendaVideojuegosService.getItemById(id);

    if(videojuego){
      this.videojuego = {...videojuego};
    }
  }

  // guardaria aqui los cambios al haber actualizado un juego

  guardarCambios(){
    if(this.videojuego.id){
      this.tiendaVideojuegosService.actualizarVideojuego(this.videojuego.id, this.videojuego)
    }
  }
 
}
