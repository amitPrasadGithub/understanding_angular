import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppPagesService } from 'src/pages/services/app-pages.service';

@Component({
    selector: 'app-contact-summary-component',
    templateUrl: './contact-summary.component.html'
})
export class ContactSummaryComponent implements OnInit {

    constructor(
        private appContactService: AppPagesService, 
        private router: Router,
        private activeRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        console.log(this.activeRoute.snapshot.queryParams);
        console.log(this.activeRoute.snapshot.fragment);
    }
}