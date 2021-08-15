export class Address {
    constructor(
        private id: number,
        private addressInfo: {
            houseNo: number,
            area: string,
            city: string,
            state: string,
            country: string,
            pincode: number,
        }
    ) {}
}