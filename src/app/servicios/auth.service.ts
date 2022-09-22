import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private _auth:string | undefined;

  get auth(){
    return this._auth;
  }

  verifica_sesion():Observable<boolean>{
    if(!sessionStorage.getItem('auth')){
      return of(false);
    }
    return of(true)
  }
  
  login(datos:any){
    if(datos.user =="admin" && datos.password =="admin"){
      this._auth = datos.user;
      sessionStorage.setItem('auth', datos.user);
      return true;
    }
    return false;
  }

}
