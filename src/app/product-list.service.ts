import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ProductListInterface } from './interfaces/ProductListInterface';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  baseUrl: string = 'https://localhost:7286/api/Ropas';

  constructor(private http: HttpClient) {}

  //Retornar arreglo de objetos de tipo ProductListInterface
  getProductList() {
    //get api/Ropas create a new object with the data
    return this.http.get(this.baseUrl);
  }
}
