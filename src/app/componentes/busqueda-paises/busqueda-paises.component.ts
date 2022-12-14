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
    console.log(this.lista_favoritos);
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

  borrar(pais:any){
    let list_aux=this.lista_favoritos!;
    this.lista_favoritos=[];
    this.paises.forEach((element: any) => {
      if(element.name==pais){
        element.estado="nofavorita";
      }
    });  
    for (let index = 0; index < list_aux!.length; index++) {
      if(list_aux![index]!=pais){
        this.lista_favoritos.push(list_aux![index]);
      }
    }
    localStorage.setItem('favoritos',this.lista_favoritos!.toString());
    this.comprueba_lista()
  }

  comprueba_lista(){
    for(let i=0;i<this.paises!.length;i++){
      for (let index = 0; index < this.lista_favoritos!.length; index++) {
        if(this.paises[i].name==this.lista_favoritos![index]){
          this.paises[i].estado="favorita";
        }
      }
    }
  }

  buscar(){
    let encontro=false;
    for (let index = 0; index < this.paises.length; index++) {
      if(this.paises[index].name.toUpperCase()==this.formBusqueda.value.busqueda.toUpperCase()){
        console.log("encontr??");
        var pais=this.paises[index];
        this.paises=[]
        this.paises.push(pais);
        encontro=true;
      }
    }if(encontro==false){
      alert("No se encontr?? el pa??s");
    }
  }

}
