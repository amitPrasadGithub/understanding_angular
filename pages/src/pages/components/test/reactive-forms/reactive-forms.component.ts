import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-reactive-forms-component',
    templateUrl: './reactive-forms.component.html',
    styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
    genders = ['male', 'female'];
    signupForm: FormGroup;
    forbiddenUserNames = ['suresh', 'mahesh'];

    ngOnInit() {
        this.signupForm = new FormGroup({
            contactData: new FormGroup({
                'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
                'email': new FormControl(null, [Validators.required, Validators.email]),
            }),
            'gender': new FormControl(null),
            'hobbies': new FormArray([]),
        });
    }

    onSubmit() {
        const contact = this.signupForm.value;
        console.log(this.signupForm);
    }

    forbiddenNames(control: FormControl): {[s: string]: boolean} {
        if(this.forbiddenUserNames.includes(control.value)) {
            return {'invalidName': true};
        }
        return null;
    }
}