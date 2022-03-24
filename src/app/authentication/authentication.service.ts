import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

const TOKEN_KEY = 'access_token';
const jwtHelperService = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  public signOut() {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.clear();
  }

  public saveToken(token: string) {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY) ?? '';
  }

  public isValidToken(): boolean {
    const token = this.getToken();

    if (!token) {
      return false;
    }

    try {
      const isTokenExpired = jwtHelperService.isTokenExpired(token);
      if (isTokenExpired) {
        return false;
      }
      const decodedToken = jwtHelperService.decodeToken(token);
      if (!decodedToken) {
        return false;
      }
    } catch (e) {
      console.log(e.message);
      return false;
    }

    return true;
  }

  getDecodedToken() {
    try {
      return jwtHelperService.decodeToken(this.getToken());
    } catch (e) {
      console.log((<Error>e).message);
      return null;
    }
  }

  getUsername(): string {
    var token = this.getDecodedToken();

    return token ? token.sub : '';
  }

  getRoles(): string[] {
    var token = this.getDecodedToken();

    return token ? token.roles : false;
  }

}
