import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Phone } from 'src/pages/modules/phone.moudule';
import { AppPagesService } from 'src/pages/services/app-pages.service';
import { ContactDetailService } from 'src/pages/services/childs/contact-detail.service';
import { PhoneService } from 'src/pages/services/childs/phone.service';

@Component({
    selector: 'app-phone-component',
    templateUrl: './phone.component.html'
})
export class PhoneComponent implements OnInit {

    constructor(
        private appContactService: AppPagesService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    contactDetailService: ContactDetailService;
    phoneService: PhoneService;
    phoneInfo: Array<Phone>;
    
    ngOnInit() {
        this.contactDetailService = this.appContactService.getContactDetailService;
        this.phoneService = this.contactDetailService.getPhoneService;
        this.phoneService.setPhoneInfo(1);
        this.phoneInfo = this.phoneService.getPhoneInfo;
    }
}