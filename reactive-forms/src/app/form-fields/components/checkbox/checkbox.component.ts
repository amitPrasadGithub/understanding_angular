import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
      selector: 'material-checkbox',
      templateUrl: './checkbox.component.html',
      styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

      checkbox!: FormGroup;

      @Input()
      control: string = '';

      @Input()
      headerLabel: string = '';

      @Input()
      labelPosition: 'before' | 'after' = 'after';

      @Input()
      options: Array<string> = ['yes', 'no', 'why', 'that'];

      @Input()
      checked: Array<string> = [];

      @Input()
      disabled: Array<string> = [];

      @Output()
      checkboxValue: EventEmitter<any> = new EventEmitter<any>();

      constructor(
            private fb: FormBuilder
      ) { }

      ngOnInit() {
            this.checkbox = this.fb.group({});
            this.options.forEach((value) => {
                  this.checkbox.setControl(value, new FormControl(false))
            })

            this.checked.forEach((value) => {
                  this.checkbox.setControl(value, new FormControl(true))
            })
      }

      onChange(event: any) {
            this.checked = [];
            Object.keys(this.checkbox.controls).forEach((key) => {
                  (this.checkbox.controls[key].value == true) ? this.checked.push(key) : '';
            })

            this.checkboxValue.emit({ value: this.checked, controlName: this.control })
      }
}