import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckboxComponent } from './form-fields/components/checkbox/checkbox.component';
import { ContactComponent } from './home/components/contact/contact.component';
import { DatatableCompoennt } from './home/components/datatable/datatable.component';
import { ContactComponent as ContactComponent2 } from './home/components/root-form-group/contact/contact.component';
import { BasicTableComponent } from './material/shareable/basic-table/basic-table.component';
import { NgForTableComponent } from './material/shareable/ng-for-table/ng-for-table.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'contact2', component: ContactComponent2 },
  { path: 'basic-table', component: BasicTableComponent },
  { path: 'ng-for-table', component: NgForTableComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'datatable', component: DatatableCompoennt },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
