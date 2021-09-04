import { Address } from 'src/pages/modules/address.module';

export class AddressService {
    private addressInfo: Array<Address> = [];

    setAddressInfo(contactId: number) {
        this.addressInfo = [
            new Address(1, {addressId: 1, houseNo: 1, area: 'dattawadi', city: 'nagpur', state: 'MH', country: 'IN', pincode: 440023, contactId: 2, addedBy: 1}),
            new Address(1, {addressId: 1, houseNo: 1, area: 'dattawadi', city: 'nagpur', state: 'MH', country: 'IN', pincode: 440023, contactId: 2, addedBy: 1}),
            new Address(1, {addressId: 1, houseNo: 1, area: 'dattawadi', city: 'nagpur', state: 'MH', country: 'IN', pincode: 440023, contactId: 2, addedBy: 1}),
        ]   
    }

    get getAddressInfo() {
        return this.addressInfo;
    }
}