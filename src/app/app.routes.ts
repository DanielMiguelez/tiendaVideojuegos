import { Routes } from '@angular/router';
import {AgregarVideojuegoComponent} from './agregar-videojuego/agregar-videojuego.component'
import {ListaVideojuegosComponent} from './lista-videojuegos/lista-videojuegos.component'

export const routes: Routes = [
    {path:'addVideogame', component: AgregarVideojuegoComponent},
    {path:'list', component: ListaVideojuegosComponent},
    {path:'', redirectTo: '/list', pathMatch:'full'},
    {path:'**', redirectTo: '/list'}
];
