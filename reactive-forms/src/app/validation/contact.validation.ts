import { HttpClient } from "@angular/common/http";
import { AsyncValidatorFn, ControlContainer, FormControl, ValidationErrors, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators'

export class ContactValidation {
      static validateEmail4: any = (http: HttpClient) => (control: FormControl) => {
            let subscription = http.get<any>('./assets/data/contact.json');
            return subscription.pipe(map(
                  data => (data.email == control.value) ? { errorMessage: "Already Exists!" } : null
            ))
      }

      static validateEmail2(http: HttpClient): AsyncValidatorFn {
            return function (control: FormControl): Observable<ValidationErrors> {
                  return http.get<any>('./assets/data/contact.json').pipe(map(
                        data => (data.email == control.value) ? { errorMessage: "Already Exists!" } : null
                  ))
            }
      }
}