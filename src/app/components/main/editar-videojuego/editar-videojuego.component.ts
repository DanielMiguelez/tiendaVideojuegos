import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VideogameServiceService } from '../../../services/videogameService/videogame-service.service';

@Component({
  selector: 'app-editar-videojuego',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './editar-videojuego.component.html',
  styleUrls: ['./editar-videojuego.component.css']
})
export class EditarVideojuegoComponent {

  tiposVideojuego: { id: number; nombre: string }[] = [];
  plataformas: { id: number; nombreplataforma: string }[] = [];
  showModal = false;
  selectedIndex: number | null = null;
  videojuego: any = {};

  constructor(
    private route: ActivatedRoute,
    private videogameService: VideogameServiceService,  // Actualicé el nombre del servicio aquí
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    
    // Cargar datos del videojuego
    this.videogameService.getVideojuegoById(id).subscribe((videojuegos) => {
      if (videojuegos.length > 0) {
        this.videojuego = { ...videojuegos[0] }; // Suponiendo que devuelves un array con 1 solo videojuego
      } else {
        console.error('Videojuego no encontrado');
        this.router.navigate(['/list']);
      }
    });

   

    // Cargar tipos y plataformas desde el servicio
    this.videogameService.getTipos().subscribe(tipos => {
      this.tiposVideojuego = tipos;
    });

    this.videogameService.getPlataformas().subscribe(plataformas => {
      this.plataformas = plataformas;
    });
  }

  editarVideojuego() {
    // Usamos el objeto completo 'videojuego' para la actualización
    this.videogameService.updateVideojuego(this.videojuego); // Pasamos el objeto completo al servicio
    this.closeModal();
    this.router.navigate(['list']);
  }

  backToList() {
    this.router.navigate(['list']);
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedIndex = null;
  }

}
