import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Login } from 'src/app/authentication/models/authentification';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    disabled: boolean = false;
    error: boolean = false;

    constructor(
        private authenticationService: AuthenticationService,
        private router: Router,
        private httpClient: HttpClient
    ) { }

    logout() {
        this.authenticationService.signOut();
        this.router.navigate(['/auth']);
    }

    login(login: Login): void {
        this.disabled = true;
        this.error = false;
        this.httpClient.post(`${environment.backend}/api/auth/login`, login).subscribe(
            (loginResponse: any) => {
                this.authenticationService.saveToken(loginResponse.access_token);
                this.disabled = false;
                this.error = false;
                this.router.navigate(['/']);
            },
            (error) => {
                this.disabled = false;
                this.error = true;
                console.log();
            }
        );
    }
}
