import { PersonalInfo } from 'src/pages/modules/personal-info.module';

export class PersonalInfoService {
    private personalInfo: Array<PersonalInfo> = [];

    setPersonalInfo(id) {
        this.personalInfo = [
            new PersonalInfo(1, {firstName: 'amit', lastName: 'prasad'}),
            new PersonalInfo(2, {firstName: 'zain', lastName: 'malik'})
        ]
    }
    get getPersonalInfo() {
        return this.personalInfo;
    }
}