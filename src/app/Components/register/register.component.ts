import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegistrarService } from 'src/app/registrar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(
    private service: RegistrarService,
    private fb: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      Nombres: ['', Validators.required],
      Apellidos: ['', Validators.required],
      Email: ['', Validators.required],
      Contrasena: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

registrarCliente() {
    this.service.registrarCliente(this.form.value).subscribe(
      (Response) => {
        //imprimir campos del formulario en consola
        console.log(this.form.value);
        //mensaje de exito
        this._snackBar.open('Cliente registrado con exito', 'Cerrar', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 7000,
        });
        //limpiar campos del formulario
        this.form.reset();
      },
      (error) => {
        //mensaje de error
        this._snackBar.open('Error al registrar cliente', 'Cerrar', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 7000,
        });
      }
    );
  }
}
