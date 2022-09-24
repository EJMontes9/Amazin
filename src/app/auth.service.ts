import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioInterface } from './interfaces/UsuarioInterfaces';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = 'https://localhost:7286/api/Usuario/';

  constructor(private http: HttpClient) { }

  login(user: UsuarioInterface) { 
    return this.http.post(this.baseUrl + 'Login', user); //Devuelve el token
  }

  get getUsername(){
    return localStorage.getItem('userName'); //Devuelve el nombre de usuario
  }

  get isAutencticated(){
    return !!localStorage.getItem('token_value'); //Si existe el token devuelve true
  }

  logout(){
    localStorage.removeItem('token_value');
    localStorage.removeItem('userName');
    //Recargar la pagina
    window.location.reload();
  }

}