export class Login {
    username: string;
    password: string;

    constructor(loginValues: Login) {
        this.username = loginValues.username || '';
        this.password = loginValues.password || '';
    }
}
