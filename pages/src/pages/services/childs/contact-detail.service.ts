import { Injectable } from '@angular/core';
import { AddressService } from './address.service';
import { PersonalInfoService } from './personal-info.service';
import { PhoneService } from './phone.service';
import { WebAddressService } from './webaddress.service';

@Injectable()
export class ContactDetailService {
    constructor(
        private personalInfoService: PersonalInfoService,
        private addressService: AddressService,
        private phoneService: PhoneService,
        private webAddressService: WebAddressService
    ) {}

    get getPersonalInfoService() {
        return this.personalInfoService;
    }
    get getAddressService() {
        return this.addressService;
    }

    get getPhoneService() {
        return this.phoneService;
    }

    get getWebAddressService() {
        return this.webAddressService;
    }
    
}