import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
      selector: 'app-contact',
      templateUrl: './contact.component.html',
      styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

      contactGroup!: FormGroup;
      testFormGroup!: FormGroup;
      r1!: FormGroup;

      constructor(
            private fb: FormBuilder
      ) { }

      async ngOnInit() {
            this.iterateObject();
            this.setVsAddControl();

            this.contactGroup = this.fb.group({
                  'personalInfo': this.fb.group({
                        'firstName': ['', {
                              validators: [Validators.required]
                        }],
                        'lastName': [],
                        'dob': []
                  })
            })

            // 4 ways 
            /**
             * 1st
             */
            this.testFormGroup = new FormGroup({
                  'personalInfo': new FormGroup({
                        'firstName': new FormControl('', Validators.required),
                        'lastName': new FormControl('')
                  }),
                  'mobile': new FormControl('')
            })

            /**
             * 2nd way
             */

            this.testFormGroup = new FormGroup({
                  'personalInfo': new FormGroup({
                        'firstName': new FormControl('', {
                              validators: [Validators.required],
                              asyncValidators: []
                        }),
                        'lastName': new FormControl('', {
                              validators: [],
                              asyncValidators: []
                        })
                  }),
                  'mobile': new FormControl('')
            });

            /**
             * 3rd way
             */
            this.testFormGroup = this.fb.group({
                  'personalInfo': this.fb.group({
                        'firstName': ['', Validators.required],
                        'lastName': [''],
                  }),
                  'mobile': ['']
            })

            /**
             * 4th way
             */
            this.testFormGroup = this.fb.group({
                  'personalInfo': this.fb.group({
                        'firstName': ['', {
                              validators: [],
                              asyncValidators: []
                        }]
                  }),
                  'mobile': []
            })
      }

      onButtonClick(event: any) {
            switch (event.buttonLabel) {
                  case 'submit':
                        console.log('submit clicked')
                        break;
            }
      }

      onFormValueChange(event: any) {
            switch (event.controlName) {
                  case 'firstName':
                        (this.contactGroup.get('personalInfo') as FormGroup).setControl('firstName', new FormControl(event.value, { validators: [Validators.required] }))
                        break;
            }
      }


      setVsAddControl() {
            let formAr = ["name", "email", "phone"];

            this.r1 = new FormGroup({})
            formAr.forEach((value) => {
                  this.r1.setControl(value, new FormControl('', {
                        validators: [],
                        asyncValidators: []
                  }))
            })
            console.log(this.r1);

            let r2 = new FormGroup({
                  'name': new FormControl('')
            })
            console.log(r2)

            let r3 = new FormGroup({});
            formAr.forEach((value) => {
                  r3.addControl(value, new FormControl(''))
            })
            console.log(r3);
      }

      iterateObject() {
            let person: any = {
                  name: "amity",
                  email: 'em'
            }

            for (let x in person) {
                  console.log(person[x]);
            }
      }

}