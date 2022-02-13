import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormGroupDirective } from "@angular/forms";

@Component({
      selector: 'input-field-root-form-group',
      templateUrl: './input-field.component.html',
      styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {

      @Input()
      control: string = '';

      @Input()
      hintLabel: string = '';

      @Input()
      floatLabel: string = '';

      @Input()
      placeholder: string = '';

      contactGroup!: FormGroup;

      constructor(
            private rootFormGroup: FormGroupDirective
      ) { }

      ngOnInit() {
            this.contactGroup = this.rootFormGroup.control;
      }
}