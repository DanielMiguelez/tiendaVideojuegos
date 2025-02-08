import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { VideogameServiceService } from '../../../services/videogameService/videogame-service.service';
import { Videojuego } from '../../../models/videojuego';

@Component({
  selector: 'app-agregar-videojuego',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './agregar-videojuego.component.html',
  styleUrl: './agregar-videojuego.component.css'
})

export class AgregarVideojuegoComponent {

  title = 'formulario';
  showModal = false;
  
  public form!: FormGroup;

  constructor(
   private videogameService: VideogameServiceService, 
   private router: Router, private formBuilder: FormBuilder){}

   ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      type: ['', [Validators.required]],
      year: ['', [Validators.required, Validators.pattern(/^\d+$/), Validators.min(1900), Validators.max(2100)]],
      platform: ['', [Validators.required]],
      descripcion: ['', [Validators.required, Validators.minLength(3)]],
    });
  
    // Obtener tipos de videojuegos
    this.videogameService.getTipos().subscribe(
      (tipos) => {
        this.tiposVideojuego = tipos;
      },
      (error) => {
        console.error('Error al obtener tipos de videojuegos:', error);
      }
    );
  
    // Obtener plataformas
    this.videogameService.getPlataformas().subscribe(
      (plataformas) => {
        this.plataformas = plataformas;
        console.log('Plataformas recibidas:', plataformas);  // Log para verificar
      },
      (error) => {
        console.error('Error al obtener plataformas:', error);
      }
    );
  }

  addVideojuego() {
    if (this.form.valid) {
      const tipoSeleccionado = this.tiposVideojuego.find(tipo => tipo.id === parseInt(this.form.value.type));
      const plataformaSeleccionada = this.plataformas.find(plataforma => plataforma.id === parseInt(this.form.value.platform));
  
      if (tipoSeleccionado && plataformaSeleccionada) {
        const videojuego: Videojuego = {
          id: 0,  // El backend se encargará de asignar un ID
          nombre: this.form.value.name,  // Cambié 'name' a 'nombre'
          tipo_id: tipoSeleccionado.id,  // Cambié 'tipo' a 'tipo_id'
          anyo: Number(this.form.value.year),  // Se mantiene como 'anyo', ya que parece correcto
          plataforma_id: plataformaSeleccionada.id,  // Cambié 'platform' a 'plataforma_id'
          descripcion: this.form.value.descripcion,  // Se mantiene igual
          tipo_nombre: tipoSeleccionado.nombre  // Esto es opcional, solo si el backend lo necesita
        };
  
        console.log(videojuego);  // Verifica que el objeto tiene las propiedades correctas
  
        this.videogameService.createVideojuego(videojuego).subscribe(
          response => {
            console.log('Videojuego creado', response);
            this.openModal();
          },
          error => {
            console.error('Error al agregar videojuego', error);
          }
        );
      } else {
        console.error('Tipo o plataforma no encontrados.');
      }
    } else {
      console.error('Formulario inválido');
    }
  }


  send(): any {
    console.log(this.form.value);
  }

  tiposVideojuego: { id: number; nombre: string }[] = [];

  plataformas: { id: number; nombreplataforma: string }[] = [];


  /*tiposVideojuego: string[] = ['Rol', 'Terror', 'FPS', 'TPS', 'Survival Horror', 'Aventura gráfica', 'RPG' ];*/

  /*tiposPlataforma: string[] = ['PC','PlayStation 5','Xbox Series X','Nintendo Switch'
  ,'PC VR','PlayStation 4','Xbox One','Nintendo 3DS','iOS','Android','Xbox 360',
  'PlayStation Vita','Game Boy','Sega Genesis','Atari',];*/
  
  /*addVideojuego(name: string, type: string, year: string, platform: string, descripcion:string ) {
    if (this.form.valid) {
      this.TiendaVideojuegosService.addVideojuego(name,type, year, platform, descripcion);
      this.openModal();
    } else {
      console.error('Formulario inválido');
    }
  }
*/

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.router.navigate(['list']);
  }
}
