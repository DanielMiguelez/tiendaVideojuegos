import { Component } from '@angular/core';
import { TiendaVideojuegosService } from '../../../services/tienda-videojuegos.service';
import { ActivatedRoute, Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-videojuego',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
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
    }else {
      console.error('Videojuego no encontrado');
      this.router.navigate(['/list']); 
  }
}

  editarVideojuego(id:number, name: string, type: string, year: string, platform: string, descripcion:string ) {

    this.tiendaVideojuegosService.editarVideojuego(id, name,type, year, platform, descripcion);

    alert("Editado con Éxito");

    this.router.navigate(['list']); // Redirigir a la lista de videojuegos
  }
}
