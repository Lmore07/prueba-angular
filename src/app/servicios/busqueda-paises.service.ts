import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusquedaPaisesService {

  api="https://restcountries.com/v2/all";

  constructor(private http:HttpClient) { }
  
  obtiene_paises(): Observable<any> {
    return this.http.get(this.api);
  }
  
}
