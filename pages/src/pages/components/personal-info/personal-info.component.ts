import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonalInfo } from 'src/pages/modules/personal-info.module';
import { ContactDetailService } from 'src/pages/services/childs/contact-detail.service';
import { PersonalInfoService } from 'src/pages/services/childs/personal-info.service';

@Component({
    selector: 'app-personal-info-component',
    templateUrl: './personal-info.component.html'
})
export class PersonalInfoComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private contactDetailService: ContactDetailService
    ) {}
    personalInfoService: PersonalInfoService;
    personalInfo: PersonalInfo;
    
    ngOnInit() {
        this.personalInfoService = this.contactDetailService.getPersonalInfoService;    
        this.personalInfo = this.personalInfoService.personalInfo;
    }
}