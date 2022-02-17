import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";
import { ButtonComponent } from "./components/button/button.component";
import { InputFieldComponent } from "./components/input-field/input-field.component";
import { MultiSelectFieldComponent } from "./components/multi-select-field/multi-select-field.component";
import { InputFieldComponent as InputFieldComponentRootFormGroup } from "./components/root-form-group/input-field/input-field.component";


const formFieldsComponents = [
      InputFieldComponent,
      ButtonComponent,

      /**
       * RootFromGroup component
       */
      InputFieldComponentRootFormGroup,
      MultiSelectFieldComponent,
];
@NgModule({
      declarations: [formFieldsComponents],
      imports: [
            MaterialModule,
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
      ],
      exports: [formFieldsComponents],
})
export class FormFieldsModule {

}