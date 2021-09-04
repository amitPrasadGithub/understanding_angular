import { Phone } from 'src/pages/modules/phone.moudule';

export class PhoneService {
    private phoneInfo: Array<Phone> = [];

    setPhoneInfo(contactId: number) {
        this.phoneInfo = [
            new Phone(1, {phoneId: 2, type: 'home', phone: 8149577287, contactId: 2, addedBy: 1}),
            new Phone(1, {phoneId: 2, type: 'home', phone: 8149577287, contactId: 2, addedBy: 1}),
        ]
    }

    get getPhoneInfo() {
        return this.phoneInfo;
    }
}