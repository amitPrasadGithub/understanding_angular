import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppPagesService } from 'src/pages/services/app-pages.service';

@Component({
    selector: 'app-sticky-notes-component',
    templateUrl: './sticky-notes.component.html'
})
export class StickyNotesComponent implements OnInit {

    constructor(
        private appContactService: AppPagesService,
        private router: Router,
        private activeRoute: ActivatedRoute
    ) {}
    
    ngOnInit() {}
}