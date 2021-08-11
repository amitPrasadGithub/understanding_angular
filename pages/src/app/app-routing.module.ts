import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressComponent } from 'src/pages/components/address/address.component';
import { AppsComponent } from 'src/pages/components/apps/apps.component';
import { ContactDetailComponent } from 'src/pages/components/contact-detail/contact-detail.component';
import { ContactSummaryComponent } from 'src/pages/components/contact-summary/contact-summary.component';
import { PageNotFoundComponent } from 'src/pages/components/error/page-not-found/page-not-found.component';
import { HomeComponent } from 'src/pages/components/home/home.component';
import { LoginComponent } from 'src/pages/components/login/login.component';
import { PersonalInfoComponent } from 'src/pages/components/personal-info/personal-info.component';
import { PhoneComponent } from 'src/pages/components/phone/phone.component';
import { ProductComponent } from 'src/pages/components/product/product.component';
import { StickyNotesComponent } from 'src/pages/components/sticky-notes/sticky-notes.component';
import { WebAddressComponent } from 'src/pages/components/webAddress/webAddress.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
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
        { path: 'stickyNotes', component: StickyNotesComponent, outlet: 'contactDetail' }
    ] },
    { path: 'contactSummary', component: ContactSummaryComponent },
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