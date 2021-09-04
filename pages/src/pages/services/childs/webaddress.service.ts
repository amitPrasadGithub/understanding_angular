import { WebAddress } from 'src/pages/modules/webAddress.module';

export class WebAddressService {
    private webAddressInfo: Array<WebAddress> = [];

    setWebAddressInfo(contactId: number) {
        this.webAddressInfo = [
            new WebAddress(1, {webAddressId: 2, type: 'personal', email: 'amit@gmail.com', contactId: 2, addedBy: 1}),
            new WebAddress(1, {webAddressId: 2, type: 'personal', email: 'amit@gmail.com', contactId: 2, addedBy: 1}),
            new WebAddress(1, {webAddressId: 2, type: 'personal', email: 'amit@gmail.com', contactId: 2, addedBy: 1}),
        ]
    }

    get getWebAddressInfo() {
        return this.webAddressInfo;
    }
}