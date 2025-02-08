import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { VideogameServiceService } from '../../../services/videogameService/videogame-service.service';
import { Videojuego } from '../../../models/videojuego'; 

@Component({
  selector: 'app-detalles-videojuego',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detalles-videojuego.component.html',
  styleUrl: './detalles-videojuego.component.css'
})
export class DetallesVideojuegoComponent {
  videojuego: Videojuego | undefined;  // Usar la interfaz Videojuego
  cargando: boolean = true;  // Indicador de carga
  error: string = '';  // Variable para mostrar errores


  constructor(private route: ActivatedRoute, private videogameService: VideogameServiceService ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;  // Obtener el ID desde la URL
    this.cargarDetallesVideojuego(id);  // Llamar al método para cargar los detalles
  }

  cargarDetallesVideojuego(id: number): void {
    this.videogameService.getVideojuegoPorId(id).subscribe(
      (data: Videojuego) => {  // Recibimos un solo videojuego
        this.videojuego = data;  // Asignar el videojuego recibido
        this.cargando = false;  // Indicamos que ya terminó de cargar
      },
      (error) => {
        this.error = 'Error al cargar el videojuego';  // Manejo de error
        this.cargando = false;  // Indicamos que ya terminó de cargar
        console.error(error);  // Mostrar error en consola
      }
    );
  }
}
