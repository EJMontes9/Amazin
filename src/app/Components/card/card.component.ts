import { Component, Input, OnInit } from '@angular/core';
import { ProductListInterface } from 'src/app/interfaces/ProductListInterface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent{

  @Input() rl!: ProductListInterface;

  //imprimir datos de r en consola
  ngOnInit(): void {
    console.log("Datos de r");
    console.log(this.rl);
  }

  constructor() { }
}
