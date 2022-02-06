import { NgModule } from "@angular/core";
import { MaterialModule } from "../material/material.module";
import { ButtonComponent } from "./components/button/button.component";
import { InputFieldComponent } from "./components/input-field/input-field.component";


const formFieldsComponents = [
      InputFieldComponent,
      ButtonComponent,
];
@NgModule({
      declarations: [formFieldsComponents],
      imports: [
            MaterialModule,
      ],
      exports: [formFieldsComponents],
})
export class FormFieldsModule {

}