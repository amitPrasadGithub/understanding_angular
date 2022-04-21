import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressComponent } from 'src/pages/components/address/address.component';
import { AngularPipesComponent } from 'src/pages/components/angular-pipes/angular-pipes.component';
import { AppsComponent } from 'src/pages/components/apps/apps.component';
import { ContactDetailComponent } from 'src/pages/components/contact-detail/contact-detail.component';
import { ContactSummaryComponent } from 'src/pages/components/contact-summary/contact-summary.component';
import { ErrorPageComponent } from 'src/pages/components/error-page/error-page.component';
import { PageNotFoundComponent } from 'src/pages/components/error/page-not-found/page-not-found.component';
import { HomeComponent } from 'src/pages/components/home/home.component';
import { LoginComponent } from 'src/pages/components/login/login.component';
import { ObjectManipulationComponent } from 'src/pages/components/object-manipulation/object-manipulation.component';
import { CustomObservable } from 'src/pages/components/observables/custom-observable/custom-observable.component';
import { PersonalInfoComponent } from 'src/pages/components/personal-info/personal-info.component';
import { PhoneComponent } from 'src/pages/components/phone/phone.component';
import { PrefetchComponent } from 'src/pages/components/prefetch/prefetch.component';
import { ProductComponent } from 'src/pages/components/product/product.component';
import { StickyNotesComponent } from 'src/pages/components/sticky-notes/sticky-notes.component';
import { AsyncValidatorComponent } from 'src/pages/components/test/async-validators/async-validator.component';
import { EventEmitterComponent } from 'src/pages/components/test/event-emitter/event-emitter.component';
import { FormsComponent } from 'src/pages/components/test/forms/forms.component';
import { ReactiveFormsComponent } from 'src/pages/components/test/reactive-forms/reactive-forms.component';
import { ViewAllContactsComponent } from 'src/pages/components/view-all-contacts/view-all-contacts.component';
import { WebAddressComponent } from 'src/pages/components/webAddress/webAddress.component';
import { AdminGaurd } from 'src/pages/gaurds/admin-gaurd.service';
import { AuthGaurd } from 'src/pages/gaurds/auth-gaurd.service';
import { ErrorResolverService } from 'src/pages/services/childs/error-resolver.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'product', component: ProductComponent },
    { path: 'apps', component: AppsComponent },
    { path: 'login', component: LoginComponent },
    { 
      path: 'contactDetail/:id', 
      component: ContactDetailComponent, 
      canActivateChild: [AuthGaurd],
      children: [
        { path: 'personalInfo/:id', component: PersonalInfoComponent, outlet: 'contactDetail' },
        { path: 'address/:id', component: AddressComponent, outlet: 'contactDetail' },
        { path: 'phone/:id', component: PhoneComponent, outlet: 'contactDetail' },
        { path: 'webAddress/:id', component: WebAddressComponent, outlet: 'contactDetail' },
        { path: 'stickyNotes', component: StickyNotesComponent, outlet: 'contactDetail' }
    ] },
    { path: 'contactSummary', component: ContactSummaryComponent },
    { path: 'custom-observable', component: CustomObservable },
    { path: 'event-emitter', component: EventEmitterComponent },
    { path: 'forms', component: FormsComponent },
    { path: 'reactive-forms', component: ReactiveFormsComponent },
    { path: 'async-validators', component: AsyncValidatorComponent },
    { path: 'angular-pipes', component: AngularPipesComponent },
    { path: 'viewAllContacts', component: ViewAllContactsComponent, canActivate: [AuthGaurd] },
    { path: 'prefetch', component: PrefetchComponent, resolve: {errorResolverService: ErrorResolverService}},
    { path: 'object-manipulation', component: ObjectManipulationComponent },
    { path: 'error-page', component: ErrorPageComponent, data: {message: 'Permission Denied'} },
    { path: '**', component: PageNotFoundComponent }
    
  ]
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}