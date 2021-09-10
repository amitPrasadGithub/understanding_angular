import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-forms-component',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
    
    @ViewChild('f') forms: HTMLFormElement;

    country: string = 'India';
    lname: string = 'prasad';
    genders = ['male', 'female'];

    contact = {
        mobile: '',
        email: '',
        fname: '',
        lname: '',
        gender: '',
        country: ''
    };

    onSubmit(form: HTMLFormElement) {
        console.log(this.forms);
        let contact = form.value.contactData;
        this.contact['mobile'] = contact['mobile'];
        this.contact['email'] = contact['email'];
        this.contact['fname'] = contact['fname'];
        this.contact['lname'] = contact['lname'];
        this.contact['mgenderobile'] = contact['gender'];
        this.contact['country'] = contact['country'];

        console.log(this.contact);
        form.reset();
        
    }
 
    ngOnInit() {}
}