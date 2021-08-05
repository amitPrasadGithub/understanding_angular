import { PersonalInfo } from 'src/pages/modules/personal-info.module';

export class PersonalInfoService {
    personalInfo: PersonalInfo = 
        new PersonalInfo(1, {firstName: 'amit', lastName: 'prasad'});
}