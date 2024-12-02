import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TiendaVideojuegosService } from '../../../services/tienda-videojuegos.service';


@Component({
  selector: 'app-detalles-videojuego',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detalles-videojuego.component.html',
  styleUrl: './detalles-videojuego.component.css'
})
export class DetallesVideojuegoComponent {
  videojuego : any;

  constructor(private route: ActivatedRoute, private tiendaVideojuegosService : TiendaVideojuegosService) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!; 
    this.videojuego = this.tiendaVideojuegosService.getItemById(id);
  }
}
