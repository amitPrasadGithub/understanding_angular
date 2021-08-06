import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppPagesService } from 'src/pages/services/app-pages.service';
import { AddressService } from 'src/pages/services/childs/address.service';
import { ContactDetailService } from 'src/pages/services/childs/contact-detail.service';

@Component({
    selector: 'app-address-component',
    templateUrl: './address.component.html'
})
export class AddressComponent implements OnInit {

    constructor(
        private appContactService: AppPagesService,
        private router: Router,
        private route: ActivatedRoute
    ) {}
    
    contactService: ContactDetailService;
    addressService: AddressService;

    ngOnInit() {
        this.contactService = this.appContactService.getContactDetailService;
        this.addressService = this.contactService.getAddressService;
    }
}