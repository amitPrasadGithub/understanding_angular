import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ErrorResolverService } from 'src/pages/services/childs/error-resolver.service';

@Component({
    selector: 'app-prefetch-component',
    templateUrl: './prefetch.component.html'
})
export class PrefetchComponent implements OnInit {
    message: string = '';
    description: string = '';
    
    constructor(
        private route: ActivatedRoute,
    ) {}
    ngOnInit() {
        this.route.data.subscribe(
            (data) => {
                this.message = data.errorResolverService['message']
                this.description = data.errorResolverService['description']
            }
        )
    }
}