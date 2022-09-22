import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private router:Router) { }

  accion="ninguna"

  ngOnInit(): void {
  }

  click(accion: string){
    this.accion=accion;
    if(this.accion=="salir"){
      sessionStorage.removeItem('auth');
      this.router.navigate(['/login']);
    }
  }

}
