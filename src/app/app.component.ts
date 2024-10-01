import { Component } from '@angular/core';
import { RouterLink, RouterOutlet} from '@angular/router';
import { ListaVideojuegosComponent } from './lista-videojuegos/lista-videojuegos.component';
import { AgregarVideojuegoComponent } from './agregar-videojuego/agregar-videojuego.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ListaVideojuegosComponent, AgregarVideojuegoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tienda_videojuegos';
}
