export class PersonalInfo {
    constructor(
        private id: number,
        private info: {
            firstName: string,
            lastName: string
        }
    ) {}

    get getId() {
        return this.id;
    }

    get getInfo() {
        return this.info;
    }
}