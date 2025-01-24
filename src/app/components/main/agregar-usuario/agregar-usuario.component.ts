import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserServiceService } from '../../../services/userService/user-service.service';



@Component({
  selector: 'app-agregar-usuario',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './agregar-usuario.component.html',
  styleUrl: './agregar-usuario.component.css'
})

export class AgregarUsuarioComponent {
  constructor(private formBuilder: FormBuilder, private userService: UserServiceService) {}
}



