import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaPaisesComponent } from './componentes/busqueda-paises/busqueda-paises.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { GuardsGuard } from './servicios/guards.guard';

const routes: Routes = [
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'paises',
    canLoad:[GuardsGuard],
    canActivate: [GuardsGuard],
    component:BusquedaPaisesComponent
  },
  {
    path: 'inicio',
    canLoad:[GuardsGuard],
    canActivate: [GuardsGuard],
    component:InicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
