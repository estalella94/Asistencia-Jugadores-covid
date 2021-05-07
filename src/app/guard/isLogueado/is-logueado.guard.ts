import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LogueadoService } from '../../services/logueado/logueado.service';

@Injectable({
  providedIn: 'root'
})
export class IsLogueadoGuard implements CanActivate {

  constructor(private logueado:LogueadoService){

  }



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

/*
      if( this.logueado.getEstado() ){
        return true
      }else{
        return false
      }
*/

      return this.logueado.getEstado()

  }

}
