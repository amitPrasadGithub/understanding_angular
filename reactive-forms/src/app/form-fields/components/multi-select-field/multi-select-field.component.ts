import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
      selector: 'material-checkbox',
      templateUrl: './multi-select-field.component.html',
      styleUrls: ['./multi-select-field.component.scss']
})
export class MultiSelectFieldComponent implements OnInit {

      checkbox!: FormGroup;
      checkboxOps: FormControl;

      @Input()
      control: string = '';

      @Input()
      headerLabel: string = 'header Label';

      @Input()
      labelPosition: 'before' | 'after' = 'after';

      @Input()
      options: Array<string> = ['yes', 'no', 'why', 'that'];

      @Input()
      checked: Array<string> = [];

      @Input()
      disabled: Array<string> = [];

      @Output()
      multiSelectFieldValue: EventEmitter<any> = new EventEmitter<any>();

      constructor(
            private fb: FormBuilder
      ) { }

      ngOnInit() {
            this.checkboxOps = new FormControl(this.checked);
      }

      onChange(event: any) {
            this.checked = this.checkboxOps.value;
            this.multiSelectFieldValue.emit({ value: this.checked, controlName: this.control })
      }
}