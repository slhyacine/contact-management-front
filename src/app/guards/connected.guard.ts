import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ConnectedGuard implements CanActivate {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }
  canActivate(): boolean {
    const isConnected = this.authenticationService.isValidToken();
    
    if(!isConnected) return true;

    this.router.navigate(['/']);

    return false;
  }
}
