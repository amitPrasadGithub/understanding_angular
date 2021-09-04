export class Phone {
    constructor(
        private id: number,
        private phones: {
            phoneId: number,
            type: string,
            phone: number,
            contactId: number,
            addedBy: number
        }
    ) {}

    get getId() {
        return this.id;
    }

    get getPhones() {
        return this.phones;
    }
}