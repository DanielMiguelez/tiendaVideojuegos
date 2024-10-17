import { Routes } from '@angular/router';
import {AgregarVideojuegoComponent} from './components/main/agregar-videojuego/agregar-videojuego.component'
import { DetallesVideojuegoComponent } from './components/main/detalles-videojuego/detalles-videojuego.component';
import { ListaVideojuegosComponent } from './components/main/lista-videojuegos/lista-videojuegos.component';
import { EditarVideojuegoComponent } from './components/main/editar-videojuego/editar-videojuego.component';


export const routes: Routes = [
    {path:'addVideogame', component: AgregarVideojuegoComponent},
    {path:'list', component: ListaVideojuegosComponent},
    {path:'videojuego/:id', component: DetallesVideojuegoComponent},
    {path:'editar_videojuego/:id', component: EditarVideojuegoComponent},
    {path:'', redirectTo: '/list', pathMatch:'full'},
    {path:'**', redirectTo: '/list'}
];
