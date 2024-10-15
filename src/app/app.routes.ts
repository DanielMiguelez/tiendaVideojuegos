import { Routes } from '@angular/router';
import {AgregarVideojuegoComponent} from './components/agregar-videojuego/agregar-videojuego.component'
import { DetallesVideojuegoComponent } from './components/detalles-videojuego/detalles-videojuego.component';
import { ListaVideojuegosComponent } from './components/lista-videojuegos/lista-videojuegos.component';

export const routes: Routes = [
    {path:'addVideogame', component: AgregarVideojuegoComponent},
    {path:'list', component: ListaVideojuegosComponent},
    {path:'videojuego/:id', component: DetallesVideojuegoComponent},
    {path:'', redirectTo: '/list', pathMatch:'full'},
    {path:'**', redirectTo: '/list'}
];
