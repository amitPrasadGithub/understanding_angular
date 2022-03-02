import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function emailValidator(control: AbstractControl): { [key: string]: any } {
      const valid = /amit.prasad/.test(control.value);
      return (valid) ? { email: { value: control.value } } : null;
}