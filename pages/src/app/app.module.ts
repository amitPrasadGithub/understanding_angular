import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularPipesComponent } from 'src/pages/components/angular-pipes/angular-pipes.component';
import { ParentComponent } from 'src/pages/components/app-parent/app-parent.component';
import { ContactBriefComponent } from 'src/pages/components/contact-brief/contact-brief.component';
import { ContactDetailComponent } from 'src/pages/components/contact-detail/contact-detail.component';
import { ContactSummaryComponent } from 'src/pages/components/contact-summary/contact-summary.component';
import { CustomSturcturalDirectiveComponent } from 'src/pages/components/custom-structual-directive/custom-structural-directive.component';
import { ObjectManipulationComponent } from 'src/pages/components/object-manipulation/object-manipulation.component';
import { CustomObservable } from 'src/pages/components/observables/custom-observable/custom-observable.component';
import { PersonalInfoComponent } from 'src/pages/components/personal-info/personal-info.component';
import { PrefetchComponent } from 'src/pages/components/prefetch/prefetch.component';
import { AsyncValidatorComponent } from 'src/pages/components/test/async-validators/async-validator.component';
import { EventEmitterComponent } from 'src/pages/components/test/event-emitter/event-emitter.component';
import { FormsComponent } from 'src/pages/components/test/forms/forms.component';
import { ReactiveFormsComponent } from 'src/pages/components/test/reactive-forms/reactive-forms.component';
import { ViewAllContactsComponent } from 'src/pages/components/view-all-contacts/view-all-contacts.component';
import { AlternateIfDirective } from 'src/pages/directives/custom-structural-directive/alternate-if.directive';
import { DropdownDirective } from 'src/pages/directives/dropdown/dropdown.directive';
import { HeaderComponent } from 'src/pages/experience_fragments/header/header.component';
import { AdminGaurd } from 'src/pages/gaurds/admin-gaurd.service';
import { AuthGaurd } from 'src/pages/gaurds/auth-gaurd.service';
import { RemoveDuplicateCharPipe } from 'src/pages/pipes/remove-duplicate-char.pipe';
import { ReplaceDashPipe } from 'src/pages/pipes/replace-dash.pipe';
import { StringManipulation } from 'src/pages/pipes/string-manipulation.pipe';
import { AppPagesService } from 'src/pages/services/app-pages.service';
import { AddressService } from 'src/pages/services/childs/address.service';
import { ContactDetailService } from 'src/pages/services/childs/contact-detail.service';
import { ContactSummaryService } from 'src/pages/services/childs/contact-summary.service';
import { ErrorResolverService } from 'src/pages/services/childs/error-resolver.service';
import { PersonalInfoService } from 'src/pages/services/childs/personal-info.service';
import { PhoneService } from 'src/pages/services/childs/phone.service';
import { EventEmitterService } from 'src/pages/services/childs/test/event-emitter.service';
import { WebAddressService } from 'src/pages/services/childs/webaddress.service';
import { AdminGaurdService } from 'src/pages/services/route-gaurds/admin-gaurd.service';
import { AuthGaurdService } from 'src/pages/services/route-gaurds/auth-gaurd.service';
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
    ContactBriefComponent,
    ViewAllContactsComponent,
    ContactBriefComponent,
    PrefetchComponent,
    CustomObservable,
    EventEmitterComponent,
    FormsComponent,
    ReactiveFormsComponent,
    AsyncValidatorComponent,
    AngularPipesComponent,
    ObjectManipulationComponent,
    CustomSturcturalDirectiveComponent,

    /**
     * Pipes
     */
    ReplaceDashPipe,
    RemoveDuplicateCharPipe,
    StringManipulation,
    /**
     * Directives
     */
    DropdownDirective,

    /***
     * Custom Structural Directives
     */
    AlternateIfDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AppPagesService,
    ContactDetailService,
    ContactSummaryService,

    PersonalInfoService,
    AddressService,
    PhoneService,
    WebAddressService,
    AdminGaurd,
    AdminGaurdService,
    AuthGaurd,
    AuthGaurdService,

    ErrorResolverService,

    EventEmitterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
