import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppPagesService } from 'src/pages/services/app-pages.service';
import { AddressService } from 'src/pages/services/childs/address.service';
import { ContactDetailService } from 'src/pages/services/childs/contact-detail.service';
import { PersonalInfoService } from 'src/pages/services/childs/personal-info.service';
import { PhoneService } from 'src/pages/services/childs/phone.service';
import { WebAddressService } from 'src/pages/services/childs/webaddress.service';

@Component({
    selector: 'app-contact-detail-component',
    templateUrl: './contact-detail.component.html',
    providers: []
})
export class ContactDetailComponent implements OnInit {

    constructor(
        private appContactService: AppPagesService,
        private router: Router,
        private route: ActivatedRoute,
        private personalInfoService: PersonalInfoService,
        private addressService: AddressService,
        private phoneService: PhoneService,
        private webAddressService: WebAddressService
    ) {}

    contactDetailService: ContactDetailService = this.appContactService.getContactDetailService;
    
    onClick(view: string) {
        if(view === 'info')
            this.router.navigate(['personalInfo/1', {relativeTo: this.route}]);
    }
    ngOnInit() {}


}