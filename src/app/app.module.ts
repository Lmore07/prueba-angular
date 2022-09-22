import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { FavoritosComponent } from './componentes/favoritos/favoritos.component';
import { BusquedaPaisesComponent } from './componentes/busqueda-paises/busqueda-paises.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { InicioComponent } from './componentes/inicio/inicio.component'  

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FavoritosComponent,
    BusquedaPaisesComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
