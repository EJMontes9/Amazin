import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public active : boolean = false
  NameEnterprise : string = 'Amazing';
  
  constructor(private service:AuthService) {}
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

  //comprobar si hay un token
  get isAutencticated(){
    return !!localStorage.getItem('token_value');
  }

  //obtener el nombre de usuario
  get getUsername(){
    return localStorage.getItem('userName');
  }

  //cerrar sesion
  salir(){
    this.service.logout();
  }

}
