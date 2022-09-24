import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegistrarInterface } from './interfaces/RegistrarInterface';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  baseUrl: string = 'https://localhost:7286/api/Clientes';

  constructor(private http: HttpClient) { }

  //iregistrar datos en la base de datos
  registrarCliente(registrar: RegistrarInterface) {
    return this.http.post(this.baseUrl, registrar);
  }

}
