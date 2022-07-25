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

 ShowHideResponsive() : void{
    const nav = ((document.querySelector('#FilterSection')) as HTMLElement)
    nav.classList.toggle('hidden')
  }
  
  HiddenColors() : void{

    const nav = ((document.querySelector('#Colors')) as HTMLElement)
    nav.classList.toggle('hidden')
    const svg= ((document.querySelector('#ClShow')) as HTMLElement)
    svg.classList.toggle('hidden')
    const svg2= ((document.querySelector('#ClHidden')) as HTMLElement)
    svg2.classList.toggle('hidden')
    
  }

  Categories() : void{

    const ct = ((document.querySelector('#Categories')) as HTMLElement)
    ct.classList.toggle('hidden')
    const ct_svg= ((document.querySelector('#CtShow')) as HTMLElement)
    ct_svg.classList.toggle('hidden')
    const ct_svg2= ((document.querySelector('#CtHidden')) as HTMLElement)
    ct_svg2.classList.toggle('hidden')
  }

  Sizes() : void{
      
      const nav = ((document.querySelector('#Sizes')) as HTMLElement)
      nav.classList.toggle('hidden')
      const s_svg= ((document.querySelector('#SzShow')) as HTMLElement)
      s_svg.classList.toggle('hidden')
      const s_svg2= ((document.querySelector('#SzHidden')) as HTMLElement)
      s_svg2.classList.toggle('hidden')

    }

    //Functions for the Responsive Menu

    HiddenColorsR() : void{

      const nav = ((document.querySelector('#CResponsive')) as HTMLElement)
      nav.classList.toggle('hidden')
      const svg= ((document.querySelector('#CSResponsive')) as HTMLElement)
      svg.classList.toggle('hidden')
      const svg2= ((document.querySelector('#CHResponsive')) as HTMLElement)
      svg2.classList.toggle('hidden')
      
    }
  
    CategoriesR() : void{
  
      const ct = ((document.querySelector('#CtResponsive')) as HTMLElement)
      ct.classList.toggle('hidden')
      const ct_svg= ((document.querySelector('#CtSResponive')) as HTMLElement)
      ct_svg.classList.toggle('hidden')
      const ct_svg2= ((document.querySelector('#CtHResponsive')) as HTMLElement)
      ct_svg2.classList.toggle('hidden')
    }
  
    SizesR() : void{
        
        const nav = ((document.querySelector('#SResponsive')) as HTMLElement)
        nav.classList.toggle('hidden')
        const s_svg= ((document.querySelector('#SSResponive')) as HTMLElement)
        s_svg.classList.toggle('hidden')
        const s_svg2= ((document.querySelector('#SHResponsive')) as HTMLElement)
        s_svg2.classList.toggle('hidden')
  
      }

}

