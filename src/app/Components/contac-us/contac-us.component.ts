import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactoInterface } from 'src/app/interfaces/ContactoInterface';
import { ContactoService } from 'src/app/contacto.service';

@Component({
  selector: 'app-contac-us',
  templateUrl: './contac-us.component.html',
  styleUrls: ['./contac-us.component.css'],
})
export class ContacUsComponent implements OnInit {
  form: FormGroup;

  constructor(
    private service: ContactoService,
    private fb: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      Nombres: ['', Validators.required],
      Telefono: ['', Validators.required],
      Correo: ['', Validators.required],
      Mensaje: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    //comprobar si el usuario esta logueado
    if (localStorage.getItem('token_value') == null) {
      //mensaje de error
      this._snackBar.open(
        'Debes iniciar sesion para poder enviar un mensaje',
        'Cerrar',
        {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 7000,
        }
      );
      this.router.navigate(['Login']);
    }
  }

  insertContacto() {
    this.service.insertContacto(this.form.value).subscribe(
      (Response) => {
        //imprimir campos del formulario en consola
        console.log(this.form.value);
        //mensaje de exito
        this._snackBar.open('Mensaje enviado con exito', 'Cerrar', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 7000,
        });
        //limpiar campos del formulario
        this.form.reset();
      },
      (error) => {
        this.texterror();
      }
    );
  }

  texterror() {
    this._snackBar.open(
      'Error al enviar el mensaje. Asegurate de llenar todos los campos',
      'Cerrar',
      {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 7000,
      }
    );
  }
}
