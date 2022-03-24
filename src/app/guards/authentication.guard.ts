import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(
    private authenticationService: AuthenticationService,
    private router:Router
  ){}


  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean 
  { 
    const isValidToken = this.authenticationService.isValidToken();

    if(!isValidToken) {
        this.router.navigate(['/auth/login']);
     return false;
    }

    return true;
  }
}
