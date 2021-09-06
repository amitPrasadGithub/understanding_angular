import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class ErrorResolverService implements Resolve<{message: string, description: string}> {

    constructor(
        private route: ActivatedRoute
    ) {}
    resolve(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ): Observable<{message: string, description: string}> | Promise<{message: string, description: string}> | {message: string, description: string} {
        return of({message: 'Oh boy', description: 'Seems critical'});
    }
}