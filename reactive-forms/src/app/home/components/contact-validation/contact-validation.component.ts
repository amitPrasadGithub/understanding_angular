import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { ContactValidation } from "src/app/validation/contact.validation";

@Component({
      selector: 'app-contact-validation',
      templateUrl: './contact-validation.component.html'
})
export class ContactValidationComponent implements OnInit {

      contactForm: FormGroup;
      emailList = 'amit.prasad@gmail.com';

      constructor(
            private fb: FormBuilder,
            private http: HttpClient
      ) { }

      ngOnInit() {
            debugger;
            this.buildContactForm();
      }

      buildContactForm() {
            this.contactForm = new FormGroup({
                  'email': new FormControl('', {
                        validators: [],
                        asyncValidators: [ContactValidation.validateEmail2(this.http)],
                        updateOn: 'blur'
                  })
            })
      }

      validateEmail(control: AbstractControl): { [key: string]: any } {
            debugger;
            if (this.emailList == control.value)
                  return { email: "invalid" }
            return null;
      }

      validateEmail2(control: FormControl): Observable<any> {

            let subscription = this.http.get<any>('./assets/data/contact.json');
            subscription.subscribe(data => {
                  console.log(data);
                  if (data.email === 'amit.prasad@gmail.com') {
                        return Observable.create({ email: "Omg" });
                  }
                  else {
                        return null;
                  }
            })
            return null;

      }

}

const validateEmail3 = (httpClient: HttpClient) => (control: FormControl) => {
      return httpClient.get<any>('./assets/data/contact.json').pipe(
            map(data => {
                  if (data.email === control.value) {
                        return { errorMessage: "invalid email" }
                  }
                  else {
                        return null;
                  }
            })
      )
}