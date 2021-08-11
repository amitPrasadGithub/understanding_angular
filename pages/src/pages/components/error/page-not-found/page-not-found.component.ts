import { Component, OnInit } from "@angular/core";
import { AppPagesService } from 'src/pages/services/app-pages.service';

@Component({
    selector: 'app-page-not-found-component',
    templateUrl: './page-not-found.component.html'
})
export class PageNotFoundComponent implements OnInit {

    constructor(
        private appContactService: AppPagesService
    ) {}

    ngOnInit() {}
}