import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-overviews',
  templateUrl: './product-overviews.component.html',
  styleUrls: ['./product-overviews.component.css']
})
export class ProductOverviewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  
  
  slider(): void {
    const img1 = ((document.querySelector('#img1')) as HTMLElement)
    const img2 = ((document.querySelector('#img2')) as HTMLElement)
    const img3 = ((document.querySelector('#img3')) as HTMLElement)

    if (!(img1.classList.contains('hidden'))) {
      img1.classList.toggle('hidden')
      img2.classList.toggle('hidden')
    }
    else if (!(img2.classList.contains('hidden'))){
      img2.classList.toggle('hidden')
      img3.classList.toggle('hidden')
    }
    else if (!(img3.classList.contains('hidden'))) {
      img3.classList.toggle('hidden')
      img1.classList.toggle('hidden')
    }
  }
}