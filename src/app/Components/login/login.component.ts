import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/auth.service';
import { UsuarioInterface } from 'src/app/interfaces/UsuarioInterfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private service:AuthService, private fb: FormBuilder, private router: Router, private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }

  usuarioTemp: any;
  passwordTemp: any;

  ngOnInit(): void {}

  // ingresar() {
  //   console.log(this.form.value);
  //   const email = this.form.value.email;
  //   const password = this.form.value.password;
  //   if (email == 'cliente' && password == '123456') {
  //     this.router.navigate(['']);
  //   } else {
  //     this.texterror();
  //   }
  // }

  ingresar() {
    this.usuarioTemp = this.form.value.Email;

    this.service.login(this.form.value as UsuarioInterface).subscribe((data: any) => {
      console.log(data);
      localStorage.setItem('userName', this.usuarioTemp); //almacena el nombre de usuario
      localStorage.setItem('token_value', data); //almacena el token
      this.router.navigate(['']); //redirecciona a la pagina principal
    }, error => {
      this.texterror();
    });
  }

  texterror() {
    this._snackBar.open('Usuario o contraseña incorrectos', 'Cerrar', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 7000,
    });
  }
}
