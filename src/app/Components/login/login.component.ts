import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  ingresar() {
    console.log(this.form.value);
    const email = this.form.value.email;
    const password = this.form.value.password;
    if (email == 'cliente' && password == '123456') {
      this.router.navigate(['']);
    } else {
      this.texterror();
    }
  }

  texterror() {
    this._snackBar.open('Usuario o contraseña incorrectos', 'Cerrar', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 7000,
    });
  }
}
