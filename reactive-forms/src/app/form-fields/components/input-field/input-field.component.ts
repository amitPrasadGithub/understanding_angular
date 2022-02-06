import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
      selector: 'form-fields-input-field',
      templateUrl: './input-field.component.html',
      styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {
      @Input()
      control: string = '';

      @Input()
      hintLabel: string = '';

      @Input()
      floatLabel: string = ''

      @Input()
      placeholder: string = '';

      @Input()
      inputValue: string = '';

      @Output()
      inputFieldValue: EventEmitter<any> = new EventEmitter<any>();

      ngOnInit() { }

      onValueChange(event: any) {
            let value = ((event.target) as HTMLInputElement).value;
            this.inputFieldValue.emit({ value: value, controlName: this.control })
      }

      onValueChange2() {
            this.inputFieldValue.emit({ value: this.inputFieldValue, controlName: this.control });
      }
}