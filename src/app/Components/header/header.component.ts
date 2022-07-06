import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public active : boolean = false
  constructor() {}
  ngOnInit(): void {}

  MenuMorefuction() : void{
    const nav = ((document.querySelector('#MenuHelp')) as HTMLElement)
    nav.classList.toggle('hidden')
  }

  MenuFeaturesfuction() : void{
    const nav = ((document.querySelector('#MenuFeatures')) as HTMLElement)
    nav.classList.toggle('hidden')
  }
  
  MenuOptionsfuction() : void{
    const nav = ((document.querySelector('#MenuOptions')) as HTMLElement)
    nav.classList.toggle('hidden')
  }
}
