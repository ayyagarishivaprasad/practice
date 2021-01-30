import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';



export interface CanDeactivateComponent {
  canDeactivate: () => Observable<boolean> | boolean;
}
@Injectable({
  providedIn: 'root'
})
export class RouatingGuard implements CanActivate, CanActivateChild, CanLoad {
  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
 var i=0
 

 if(i==1)
    return true;
    else
    return false;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return false;
  }

  canDeactivate(component: CanDeactivateComponent) {
    return component.canDeactivate ? component.canDeactivate() : false;
  }
}
