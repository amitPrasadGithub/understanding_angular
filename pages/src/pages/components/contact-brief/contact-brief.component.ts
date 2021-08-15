import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { ContactDetail } from 'src/pages/modules/contact-detail.module';
import { AppPagesService } from 'src/pages/services/app-pages.service';

@Component({
    selector: 'app-contact-brief-component',
    templateUrl: './contact-brief.component.html'
})
export class ContactBriefComponent implements OnInit {

    cardType: string = 'row';
    @Input() contactDetail: ContactDetail;
    
    constructor(
        private appContactService: AppPagesService, 
        private activeRoute: ActivatedRoute,
        private router: Router
    ) {}
    
    ngOnInit() {}
}