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

  tiposVideojuego: string[] = ['Rol', 'Terror', 'FPS', 'TPS', 'Survival Horror', 'Aventura gráfica', 'RPG' ];

  showModal = false;

  selectedIndex:number | null = null;

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
    this.closeModal();
    this.router.navigate(['list']); // Redirigir a la lista de videojuegos
  }

  backToList(){
    this.router.navigate(['list']);
  }

  openModal(){
    this.showModal = true;
  }

  closeModal(){
    this.showModal = false;
    this.selectedIndex = null;
  }

 
}
