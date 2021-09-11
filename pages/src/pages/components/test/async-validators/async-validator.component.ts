import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-async-validator-component',
    templateUrl: './async-validator.component.html',
    styleUrls: ['./async-validator.component.css']
})
export class AsyncValidatorComponent implements OnInit {
    signupForm: FormGroup;
    
    ngOnInit() {
        this.signupForm = new FormGroup({
            'contactData': new FormGroup({
                'email': new FormControl(null, [Validators.required], [this.duplicateEmail.bind(this)])
            })
        })
    }

    onSubmit() {
        console.log(this.signupForm);
    }

    duplicateEmail(control: FormControl): Observable<any> | Promise<any> {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value === 'amit.prasad@gmail.com')
                    resolve('Duplicate Email');
                else {
                    resolve(null);
                }
            }, 2000)
        })
        return promise;
    }
}