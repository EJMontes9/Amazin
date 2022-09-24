import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContactoInterface } from './interfaces/ContactoInterface';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  baseUrl: string = 'https://localhost:7286/api/Contacto/';

  constructor(private http: HttpClient) { }

  //Insert data Contacto on Data Base si tiene token valido
  insertContacto(contacto: ContactoInterface) {
    let token = localStorage.getItem('token_value'); //get token
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `bearer ${token}`
    })
    return this.http.post(this.baseUrl, contacto, { headers: header }); //
  }
}