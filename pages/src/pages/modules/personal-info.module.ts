export class PersonalInfo {
    constructor(
        private id: number,
        private personalInfo: {
            firstName: string,
            lastName: string
        }
    ) {}

    get getId() {
        return this.id;
    }

    get getPersonalInfo() {
        return this.personalInfo;
    }
}