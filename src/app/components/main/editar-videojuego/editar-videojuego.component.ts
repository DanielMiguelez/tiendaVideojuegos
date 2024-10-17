import { Component } from '@angular/core';
import { TiendaVideojuegosService } from '../../../services/tienda-videojuegos.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-editar-videojuego',
  standalone: true,
  imports: [],
  templateUrl: './editar-videojuego.component.html',
  styleUrl: './editar-videojuego.component.css'
})
export class EditarVideojuegoComponent {
navigateTo(arg0: string) {
throw new Error('Method not implemented.');
}

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
      this.tiendaVideojuegosService.actualizarVideojuego(
        this.videojuego.id,
        this.videojuego.name,
        this.videojuego.type,
        this.videojuego.year,
        this.videojuego.platform,
        this.videojuego.descripcion
      );
      this.router.navigate(['/list'])
    }
  }
  editarVideojuego(id:number, name:string, type:string, year:string, platform:string, descripcion:string){
    this.tiendaVideojuegosService.actualizarVideojuego(id, name, type, year, platform, descripcion);
    this.router.navigate(['/editar_videojuego', id]);
  }
  
 
}
