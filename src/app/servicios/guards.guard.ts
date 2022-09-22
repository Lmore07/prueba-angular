import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable,tap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardsGuard implements CanActivate, CanLoad {

  constructor(private router:Router,private authService:AuthService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.authService.verifica_sesion().pipe(tap(
        autenticado => {
          if(!autenticado){
            this.router.navigate(['/login']);
          }
        }
      ));
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      return this.authService.verifica_sesion().pipe(tap(
        autenticado => {
          if(!autenticado){
            this.router.navigate(['/login']);
          }
        }
      ));
  }
}
