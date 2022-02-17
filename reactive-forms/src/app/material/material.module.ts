import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatIconModule } from "@angular/material/icon";
import { BasicTableComponent } from "./shareable/basic-table/basic-table.component";
import { NgForTableComponent } from "./shareable/ng-for-table/ng-for-table.component";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";

const material_components = [
      MatFormFieldModule,
      MatInputModule,
      MatTableModule,
      MatCheckboxModule,
      MatPaginatorModule,
      MatSortModule,
      MatIconModule,
      MatSelectModule,
      MatButtonModule,
]

const custom_components = [
      BasicTableComponent,
      NgForTableComponent,
]

@NgModule({
      imports: [
            CommonModule,
            material_components,
      ],
      exports: [material_components],
      declarations: [custom_components],
})
export class MaterialModule {

}