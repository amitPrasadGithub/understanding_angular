import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonalInfo } from 'src/pages/modules/personal-info.module';
import { AppPagesService } from 'src/pages/services/app-pages.service';
import { ContactDetailService } from 'src/pages/services/childs/contact-detail.service';
import { PersonalInfoService } from 'src/pages/services/childs/personal-info.service';

@Component({
    selector: 'app-personal-info-component',
    templateUrl: './personal-info.component.html'
})
export class PersonalInfoComponent implements OnInit {

    constructor(
        private appContactService: AppPagesService,
        private route: ActivatedRoute,
    ) {}
    contactDetailService: ContactDetailService;
    personalInfoService: PersonalInfoService;
    personalInfo: Array<PersonalInfo>;
    
    ngOnInit() {
        this.contactDetailService = this.appContactService.getContactDetailService;
        this.personalInfoService = this.contactDetailService.getPersonalInfoService; 
        this.personalInfoService.setPersonalInfo(1);
        this.personalInfo = this.personalInfoService.getPersonalInfo;
    }
}