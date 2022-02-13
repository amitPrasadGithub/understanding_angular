import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormFieldsModule } from './form-fields/form-fields.module';
import { ContactComponent } from './home/components/contact/contact.component';
import { ContactComponent as ContactComponent2 } from './home/components/root-form-group/contact/contact.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { DatatableCompoennt } from './home/components/datatable/datatable.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,

    /**
     * RootFormGroup component
     */
    ContactComponent2,
    DatatableCompoennt,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormFieldsModule,
    MaterialModule,
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
