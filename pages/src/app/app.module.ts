import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ParentComponent } from 'src/pages/components/app-parent/app-parent.component';
import { ContactDetailComponent } from 'src/pages/components/contact-detail/contact-detail.component';
import { ContactSummaryComponent } from 'src/pages/components/contact-summary/contact-summary.component';
import { PersonalInfoComponent } from 'src/pages/components/personal-info/personal-info.component';
import { DropdownDirective } from 'src/pages/directives/dropdown/dropdown.directive';
import { HeaderComponent } from 'src/pages/experience_fragments/header/header.component';
import { AppPagesService } from 'src/pages/services/app-pages.service';
import { AddressService } from 'src/pages/services/childs/address.service';
import { ContactDetailService } from 'src/pages/services/childs/contact-detail.service';
import { ContactSummaryService } from 'src/pages/services/childs/contact-summary.service';
import { PersonalInfoService } from 'src/pages/services/childs/personal-info.service';
import { PhoneService } from 'src/pages/services/childs/phone.service';
import { WebAddressService } from 'src/pages/services/childs/webaddress.service';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    HeaderComponent,
    ContactDetailComponent,
    ContactSummaryComponent,
    PersonalInfoComponent,
    
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AppPagesService,
    ContactDetailService,
    ContactSummaryService,

    PersonalInfoService,
    AddressService,
    PhoneService,
    WebAddressService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
