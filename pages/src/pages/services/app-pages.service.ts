import { Injectable } from '@angular/core';
import { ContactDetailService } from './childs/contact-detail.service';
import { ContactSummaryService } from './childs/contact-summary.service';

@Injectable()
export class AppPagesService {
    constructor(
        private contactDetailService: ContactDetailService,
        private contactSummaryService: ContactSummaryService,
    ) {}

    get getContactDetailService() {
        return this.contactDetailService;
    }

    get getContactSummaryService() {
        return this.contactSummaryService;
    }

}