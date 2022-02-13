import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from "@angular/forms";

@Component({
      selector: 'app-contact-root-form-group',
      templateUrl: './contact.component.html',
      styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

      contactGroup!: FormGroup;

      constructor(
            private fb: FormBuilder
      ) { }
      ngOnInit() {
            this.contactGroup = this.fb.group({
                  'personalInfo': this.fb.group({
                        'firstName': ['', {
                              validators: [Validators.required],
                              asyncValidators: []
                        }],
                        'lastName': ['', {
                              validators: [],
                              asyncValidators: []
                        }],
                        dob: []
                  })
            })
      }


}