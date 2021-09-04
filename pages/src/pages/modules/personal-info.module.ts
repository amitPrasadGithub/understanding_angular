export class PersonalInfo {
    constructor(
        private id: number,
        private personalInfo: {
            personalInfoId: number,
            firstName: string,
            lastName: string,
            birthday: Date,
            gender: string,
            password: string,
            contactId: number,
            addedBy: number
        }
    ) {}

    get getId() {
        return this.id;
    }

    get getPersonalInfo() {
        return this.personalInfo;
    }

    setId(id: number) {
        this.id = id;
    }
}