import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService){}
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
   if(this.authService.isUserLoggedIn()){
     return true;
   }
   else{
    return false;
   }
  }
  
}
