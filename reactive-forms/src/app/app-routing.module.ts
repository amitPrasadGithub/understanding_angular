import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiSelectFieldComponent } from './form-fields/components/multi-select-field/multi-select-field.component';
import { ContactComponent } from './home/components/contact/contact.component';
import { DatatableCustomFilter } from './home/components/datatable-custom-filter/datatable-custom-filter.component';
import { DatatableCompoennt } from './home/components/datatable/datatable.component';
import { ContactComponent as ContactComponent2 } from './home/components/root-form-group/contact/contact.component';
import { BasicTableComponent } from './material/shareable/basic-table/basic-table.component';
import { NgForTableComponent } from './material/shareable/ng-for-table/ng-for-table.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'contact2', component: ContactComponent2 },
  { path: 'basic-table', component: BasicTableComponent },
  { path: 'ng-for-table', component: NgForTableComponent },
  { path: 'multi-select-field', component: MultiSelectFieldComponent },
  { path: 'datatable', component: DatatableCompoennt },
  { path: 'datatable-custom-filter', component: DatatableCustomFilter },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
