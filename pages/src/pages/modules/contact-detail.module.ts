import { Address } from './address.module';
import { PersonalInfo } from './personal-info.module';
import { Phone } from './phone.moudule';
import { WebAddress } from './webAddress.module';

export class ContactDetail {
    constructor(
        private id: number,
        private personalInfo: Array<PersonalInfo>,
        private address: Array<Address>,
        private phone: Array<Phone>,
        private webAddress: Array<WebAddress>
    ) {}
}