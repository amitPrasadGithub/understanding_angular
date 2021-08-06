import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppPagesService } from 'src/pages/services/app-pages.service';
import { ContactDetailService } from 'src/pages/services/childs/contact-detail.service';
import { WebAddressService } from 'src/pages/services/childs/webaddress.service';

@Component({
    selector: 'app-webAddress-component',
    templateUrl: './webAddress.component.html'
})
export class WebAddressComponent implements OnInit {

    constructor(
        private appContactService: AppPagesService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    contactDetailService: ContactDetailService;
    webAddressService: WebAddressService;

    ngOnInit() {
        this.contactDetailService = this.appContactService.getContactDetailService;
        this.webAddressService = this.contactDetailService.getWebAddressService;
    }
}