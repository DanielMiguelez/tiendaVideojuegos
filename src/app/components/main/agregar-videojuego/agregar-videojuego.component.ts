import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiendaVideojuegosService } from '../../../services/tienda-videojuegos.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

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

  constructor(private TiendaVideojuegosService : TiendaVideojuegosService, private router: Router, private formBuilder: FormBuilder){}

  ngOnInit():void{
    this.form = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      type: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      year: ['', [
        Validators.required, 
        Validators.pattern(/^\d+$/),
        Validators.min(1900), 
        Validators.max(2100)]],

      platform: ['', [
        Validators.required,
      ]],
      descripcion: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
    });
  }

  send(): any {
    console.log(this.form.value);
  }


  tiposVideojuego: string[] = ['Rol', 'Terror', 'FPS', 'TPS', 'Survival Horror', 'Aventura gráfica', 'RPG' ];

  tiposPlataforma: string[] = ['PC','PlayStation 5','Xbox Series X','Nintendo Switch'
  ,'PC VR','PlayStation 4','Xbox One','Nintendo 3DS','iOS','Android','Xbox 360',
  'PlayStation Vita','Game Boy','Sega Genesis','Atari',];
  
  addVideojuego(name: string, type: string, year: string, platform: string, descripcion:string ) {
    if (this.form.valid) {
      this.TiendaVideojuegosService.addVideojuego(name,type, year, platform, descripcion);
      this.openModal();
    } else {
      console.error('Formulario inválido');
    }
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.router.navigate(['list']);
  }
}
