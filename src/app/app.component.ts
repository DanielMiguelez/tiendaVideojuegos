import { Component } from '@angular/core';
import { RouterLink, RouterOutlet} from '@angular/router';
import { ListaVideojuegosComponent } from './components/lista-videojuegos/lista-videojuegos.component';
import { AgregarVideojuegoComponent } from './components/agregar-videojuego/agregar-videojuego.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [

  RouterOutlet, RouterLink, ListaVideojuegosComponent, 
  AgregarVideojuegoComponent, 
  HeaderComponent, MainComponent, FooterComponent

],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tienda_videojuegos';
}

