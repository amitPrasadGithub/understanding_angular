import { NgModule } from "@angular/core";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";

const material_components = [
      MatFormFieldModule,
      MatInputModule
]

@NgModule({
      imports: [material_components],
      exports: [material_components],
})
export class MaterialModule {

}