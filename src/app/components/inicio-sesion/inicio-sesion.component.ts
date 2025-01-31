import { Component } from '@angular/core';
import { FormBuilder, FormGroup , ReactiveFormsModule, Validators} from '@angular/forms';
import { UserServiceService } from '../../services/userService/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css'
})

export class InicioSesionComponent {

  inicioSesionForm: FormGroup | undefined;
  form: any;

  constructor(
    private fb: FormBuilder, // Necesario para construir el formulario
    private userService: UserServiceService, // Servicio para manejar autenticación
    private router: Router // Router para redireccionar después del login
  ) {
    

     this.inicioSesionForm = this.fb.group({
      usuario: ['', [Validators.required]], // Campo para nombre de usuario
      password: ['', [Validators.required, Validators.minLength(6)]] // Contraseña, mínimo 6 caracteres
    });
  }

  send(): void {
    if (this.form.valid) {
      this.userService.createUser(this.form.value).subscribe(() => {
        console.log('User creado correctamente');
        this.form.reset();
      });
    }
}
}
