import { PersonalInfo } from 'src/pages/modules/personal-info.module';

export class PersonalInfoService {
    private personalInfo: Array<PersonalInfo> = [];

    setPersonalInfo(id) {
        this.personalInfo = [
            new PersonalInfo(1, {personalInfoId: 2, firstName: 'amit', lastName: 'prasad', birthday: new Date('30-11-1996'), gender: 'male', password: '1234', contactId: 2, addedBy: 1}),
            new PersonalInfo(1, {personalInfoId: 2, firstName: 'amit', lastName: 'prasad', birthday: new Date('30-11-1996'), gender: 'male', password: '1234', contactId: 2, addedBy: 1}),
        ]
    }
    get getPersonalInfo() {
        return this.personalInfo;
    }
}