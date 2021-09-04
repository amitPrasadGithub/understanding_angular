export class WebAddress {
    constructor(
        private id: number,
        private webAddressInfo: {
            webAddressId: number,
            type: string,
            email: string,
            contactId: number,
            addedBy: number
        }
    ) {}
}