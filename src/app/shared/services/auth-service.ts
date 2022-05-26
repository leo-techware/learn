import { Injectable } from "@angular/core";

@Injectable()
export class AuthenticationService {

    isLoggedIn: boolean = true;
    isAuthenticated() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve(this.isLoggedIn);
            }, 800)
        })
        return promise;
    }

    login() {
        this.isLoggedIn = true;
    }
    logout() {
        this.isLoggedIn = false;
    }
}