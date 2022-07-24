import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  MenuFilterHidden() : void{
    const nav = ((document.querySelector('#FilterMenu')) as HTMLElement)
    nav.classList.toggle('hidden')
  }


  MenuFilterResponsive() : void{
    const nav = ((document.querySelector('#Icon')) as HTMLElement)
    nav.classList.toggle('hidden')
  }

 ShowHideResponsive() : void{
    const nav = ((document.querySelector('#FilterSection')) as HTMLElement)
    nav.classList.toggle('hidden')
  }
  



}

