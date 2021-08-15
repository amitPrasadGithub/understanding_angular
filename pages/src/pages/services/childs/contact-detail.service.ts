import { Injectable } from '@angular/core';
import { Address } from 'src/pages/modules/address.module';
import { ContactDetail } from 'src/pages/modules/contact-detail.module';
import { PersonalInfo } from 'src/pages/modules/personal-info.module';
import { Phone } from 'src/pages/modules/phone.moudule';
import { WebAddress } from 'src/pages/modules/webAddress.module';
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

    contactDetail: Array<ContactDetail> = [];
    personalInfo: Array<PersonalInfo> = [];
    address: Array<Address> = [];
    phone: Array<Phone> = [];
    webAddress: Array<WebAddress> = [];

    setContactDetail(id) {
        this.personalInfo.push(new PersonalInfo(1, {firstName: 'amit', lastName: 'prasad'}));
        this.address.push(new Address(1, {houseNo: 1, area: 'dattawadi', city: 'nagpur', state: 'MH', country: 'IN', pincode: 440023}));
        this.phone.push(new Phone(1, {id: 1, type: 'home', phone: 8149577287}));
        this.webAddress.push(new WebAddress(1, {email: 'amit@gmail.com'}));

        this.contactDetail = [
            new ContactDetail(
                1,
                this.personalInfo,
                this.address,
                this.phone,
                this.webAddress
            ),
            new ContactDetail(
                1,
                this.personalInfo,
                this.address,
                this.phone,
                this.webAddress
            )
        ]
    }

    get getContactDetail() {
        return this.contactDetail;
    }

    set setPersonalInfo(id: number) {
        this.personalInfoService.setPersonalInfo(1);
    }
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