import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { AdminGaurdService } from '../services/route-gaurds/admin-gaurd.service';

@Injectable()
export class AdminGaurd implements CanActivate, CanActivateChild {

    constructor(
        private adminGaurdService: AdminGaurdService,
        private router: Router
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        return this.adminGaurdService.checkAuthorization()
            .then(
                (loggedIn: boolean) => {
                    if(loggedIn)
                        return true;
                    else {
                        this.router.navigate(['/']);
                    }
                }
            )
    }

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        return this.canActivate(route, state);
    }
}