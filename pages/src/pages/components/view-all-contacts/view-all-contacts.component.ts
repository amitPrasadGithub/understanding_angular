import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { ContactDetail } from 'src/pages/modules/contact-detail.module';
import { AppPagesService } from 'src/pages/services/app-pages.service';
import { AddressService } from 'src/pages/services/childs/address.service';
import { ContactDetailService } from 'src/pages/services/childs/contact-detail.service';
import { PersonalInfoService } from 'src/pages/services/childs/personal-info.service';
import { PhoneService } from 'src/pages/services/childs/phone.service';
import { WebAddressService } from 'src/pages/services/childs/webaddress.service';

@Component({
    selector: 'app-view-all-contacts-component',
    templateUrl: './view-all-contacts.component.html'
})
export class ViewAllContactsComponent implements OnInit {

    constructor(
        private appContactService: AppPagesService,
        private activeRoute: ActivatedRoute,
        private router: Router
    ) {}
    
    private contactDetail: Array<ContactDetail>;

    contactDetailService: ContactDetailService;

    ngOnInit() {
        this.contactDetailService = this.appContactService.getContactDetailService;
        this.contactDetailService.setContactDetail(1);
        this.setContactDetail(this.contactDetailService.getContactDetail);
        console.log(this.contactDetail);
    }

    get getContactDetail() {
        return this.contactDetail;
    }
    
    setContactDetail(contactDetail) {
        this.contactDetail = contactDetail
    }
}