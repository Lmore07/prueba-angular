import { Component, OnInit } from '@angular/core';
import { BusquedaPaisesService } from 'src/app/servicios/busqueda-paises.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  constructor(private servicio_paises:BusquedaPaisesService) { }

  paises:any;

  ngOnInit(): void {
    var favoritos=localStorage.getItem('favoritos')?.split(',');
    if( favoritos!=undefined){
      this.paises = favoritos!;
    }
  }

}
