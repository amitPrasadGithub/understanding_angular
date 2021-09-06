import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGaurdService } from '../services/route-gaurds/auth-gaurd.service';

@Injectable()
export class AuthGaurd implements CanActivate, CanActivateChild {

    constructor(
        private authGaurdService: AuthGaurdService,
        private router: Router
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.authGaurdService.isAuthenticated()
            .then((loggedIn: boolean) => {
                if(loggedIn)
                    return true;
                else {
                    this.router.navigate(['error-page'])
                }
            })
    }

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        return this.canActivate(route, state);
    }
}