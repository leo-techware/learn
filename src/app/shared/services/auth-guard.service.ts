import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "./auth-service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthenticationService, private route: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.authService.isAuthenticated().then((authenticated: any) => {
            if (authenticated) {
                return true;
            } else {
                this.route.navigate(['/']);
                return false;
            }
        })
    }
}