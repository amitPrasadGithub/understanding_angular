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
        this.personalInfo.push(new PersonalInfo(1, {personalInfoId: 2, firstName: 'amit', lastName: 'prasad', birthday: new Date('30-11-1996'), gender: 'male', password: '1234', contactId: 2, addedBy: 1}));
        this.address.push(new Address(1, {addressId: 1, houseNo: 1, area: 'dattawadi', city: 'nagpur', state: 'MH', country: 'IN', pincode: 440023, contactId: 2, addedBy: 1}));
        this.phone.push(new Phone(1, {phoneId: 2, type: 'home', phone: 8149577287, contactId: 2, addedBy: 1}));
        this.webAddress.push(new WebAddress(1, {webAddressId: 2, type: 'personal', email: 'amit@gmail.com', contactId: 2, addedBy: 1}));



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
        )];
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