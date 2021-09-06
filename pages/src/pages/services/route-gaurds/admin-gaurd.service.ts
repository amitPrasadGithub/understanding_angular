import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

export class AdminGaurdService {
    isAdmin: boolean = true;

    checkAuthorization() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(
                    (resolve) => {
                        return this.isAdmin;
                    }, 200
                )
            }
        )

        return promise;
    }
}