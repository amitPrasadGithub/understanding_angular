export class Address {
    constructor(
        private id: number,
        private addressInfo: {
            addressId: number,
            houseNo: number,
            area: string,
            city: string,
            state: string,
            country: string,
            pincode: number,
            contactId: number,
            addedBy: number
        }
    ) {}
}