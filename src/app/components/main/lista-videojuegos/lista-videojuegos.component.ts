import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideogameServiceService } from '../../../services/videogameService/videogame-service.service';
import { Videojuego } from '../../../models/videojuego';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';  // Importa FormsModule

@Component({
  selector: 'app-lista-videojuegos',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Asegúrate de incluir FormsModule aquí
  templateUrl: './lista-videojuegos.component.html',
  styleUrls: ['./lista-videojuegos.component.css']
})

export class ListaVideojuegosComponent implements OnInit {
  videojuegos: Videojuego[] = [];
  plataformas: { id: number; nombreplataforma: string }[] = [];

  showModal: boolean = false;
  selectedIndex: number | null = null;
  showEditForm: { [key: number]: boolean } = {};  

  constructor(
    private videogameService: VideogameServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarVideojuegos();
  }

  cargarVideojuegos(): void {
    this.videogameService.getVideojuegos().pipe(
      tap((response: Videojuego[]) => {
        this.videojuegos = response;
        this.videojuegos.forEach(videojuego => {
          this.showEditForm[videojuego.id] = false;
        });
      }),
      catchError((error) => {
        console.error('Error al cargar los videojuegos:', error);
        return of([]);
      })
    ).subscribe();
  }

  toggleEditForm(videojuegoId: number): void {
    this.showEditForm[videojuegoId] = !this.showEditForm[videojuegoId];
  }

  editarVideojuego(videojuego: Videojuego): void {
    this.videogameService.updateVideojuego(videojuego).subscribe(() => {
      this.cargarVideojuegos();  
      this.toggleEditForm(videojuego.id);  
    });
  }

  deleteVideojuegoPro(): void {
    if (this.selectedIndex !== null) {
      const videojuegoId = this.videojuegos[this.selectedIndex].id;
      this.videogameService.deleteVideojuego(videojuegoId).subscribe(
        () => {
          if (this.selectedIndex !== null) {
            this.videojuegos.splice(this.selectedIndex, 1);
            this.closeModal();
          }
        },
        (error: any) => {
          console.error('Error al eliminar el videojuego:', error);
        }
      );
    }
  }

  verVideojuego(id: number) {
    this.router.navigate(['/videojuego', id]);
  }

  openModal(index: number): void {
    this.selectedIndex = index;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedIndex = null;
  }
}
