import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormFieldsModule } from './form-fields/form-fields.module';
import { ContactComponent } from './home/components/contact/contact.component';
import { ContactComponent as ContactComponent2 } from './home/components/root-form-group/contact/contact.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatatableCompoennt } from './home/components/datatable/datatable.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { DatatableCustomFilter } from './home/components/datatable-custom-filter/datatable-custom-filter.component';
import { ContactValidationComponent } from './home/components/contact-validation/contact-validation.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CallByReferenceValueComponent } from './home/components/call-by-reference-value/call-by-reference-value.component';
import { ObjectManipulationComponent } from './home/components/object-manipulation/object-manipulation.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,

    /**
     * RootFormGroup component
     */
    ContactComponent2,
    DatatableCompoennt,
    DatatableCustomFilter,
    ContactValidationComponent,
    CallByReferenceValueComponent,
    ObjectManipulationComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FormFieldsModule,
    MaterialModule,
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
