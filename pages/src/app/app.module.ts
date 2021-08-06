import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from 'src/pages/components/address/address.component';
import { ParentComponent } from 'src/pages/components/app-parent/app-parent.component';
import { AppsComponent } from 'src/pages/components/apps/apps.component';
import { ContactDetailComponent } from 'src/pages/components/contact-detail/contact-detail.component';
import { ContactSummaryComponent } from 'src/pages/components/contact-summary/contact-summary.component';
import { HomeComponent } from 'src/pages/components/home/home.component';
import { LoginComponent } from 'src/pages/components/login/login.component';
import { PersonalInfoComponent } from 'src/pages/components/personal-info/personal-info.component';
import { PhoneComponent } from 'src/pages/components/phone/phone.component';
import { ProductComponent } from 'src/pages/components/product/product.component';
import { WebAddressComponent } from 'src/pages/components/webAddress/webAddress.component';
import { DropdownDirective } from 'src/pages/directives/dropdown/dropdown.directive';
import { HeaderComponent } from 'src/pages/experience_fragments/header/header.component';
import { AppPagesService } from 'src/pages/services/app-pages.service';
import { AddressService } from 'src/pages/services/childs/address.service';
import { ContactDetailService } from 'src/pages/services/childs/contact-detail.service';
import { ContactSummaryService } from 'src/pages/services/childs/contact-summary.service';
import { PersonalInfoService } from 'src/pages/services/childs/personal-info.service';
import { PhoneService } from 'src/pages/services/childs/phone.service';
import { WebAddressService } from 'src/pages/services/childs/webaddress.service';

import { AppComponent } from './app.component';
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'apps', component: AppsComponent },
  { path: 'login', component: LoginComponent },
  { 
    path: 'contactDetail/:id', 
    component: ContactDetailComponent, 
    children: [
      { path: 'personalInfo/:id', component: PersonalInfoComponent, outlet: 'contactDetail' },
      { path: 'address/:id', component: AddressComponent, outlet: 'contactDetail' },
      { path: 'phone/:id', component: PhoneComponent, outlet: 'contactDetail' },
      { path: 'webAddress/:id', component: WebAddressComponent, outlet: 'contactDetail' },
  ] },
  { path: 'contactSummary/:id', component: ContactSummaryComponent },
  
]
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
    RouterModule.forRoot(appRoutes)
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
