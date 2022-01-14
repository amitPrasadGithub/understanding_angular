import { NgModule } from "@angular/core";

import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';

const material_components = [
      MatStepperModule,
];
@NgModule({
      imports: [material_components],
      exports: [material_components]
})
export class AngularMaterialsModule {

}