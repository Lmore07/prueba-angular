import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BusquedaPaisesService } from 'src/app/servicios/busqueda-paises.service';

@Component({
  selector: 'app-busqueda-paises',
  templateUrl: './busqueda-paises.component.html',
  styleUrls: ['./busqueda-paises.component.css']
})
export class BusquedaPaisesComponent implements OnInit {

  constructor(private servicio_paises:BusquedaPaisesService,private formBuilder:FormBuilder) { }

  paises:any;
  carga=true;
  formBusqueda:any;
  agregada=false;
  lista_favoritos:String[] | null=[];

  ngOnInit(): void {
    var favoritos=localStorage.getItem('favoritos')?.split(',');
    if( favoritos!=undefined){
      for (let index = 0; index < favoritos!.length; index++) {
        this.lista_favoritos!.push(favoritos![index]);
      }
    }
    this.formBusqueda = this.formBuilder.group({
      busqueda: ['']
    });
    this.servicio_paises.obtiene_paises().subscribe(response => {
      response.forEach((element: any) => {
        element.estado="nofavorita"
      });
      this.paises=response;
      this.carga=false;
      this.comprueba_lista();
    });
  }

  agregar(pais:any, index:any){
    this.lista_favoritos!.push(pais);
    this.paises.forEach((element: any) => {
      if(element.name==pais){
        element.estado="favorita";
      }
    });  
    localStorage.setItem('favoritos',this.lista_favoritos!.toString());
    this.comprueba_lista();
  }

  comprueba_lista(){
    for(let i=0,j=0;i<this.paises!.length;i++){
      if(this.paises[i].name==this.lista_favoritos![j]){
        this.paises[i].estado="favorita";
        j++;
      }
    }
  }

  buscar(){
    let encontro=false;
    for (let index = 0; index < this.paises.length; index++) {
      if(this.paises[index].name.toUpperCase()==this.formBusqueda.value.busqueda.toUpperCase()){
        console.log("encontró");
        var pais=this.paises[index];
        this.paises=[]
        this.paises.push(pais);
        encontro=true;
      }
    }if(encontro==false){
      alert("No se encontró el país");
    }
  }

}
