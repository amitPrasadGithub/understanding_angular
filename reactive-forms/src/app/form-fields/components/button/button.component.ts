import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
      selector: 'form-fields-button-field',
      templateUrl: './button.component.html',
      styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

      @Input()
      isButtonDisabled: boolean = true;

      @Input()
      buttonLabel: string = '';

      @Output()
      onClick = new EventEmitter<any>();

      ngOnInit() { }

      onButtonClick(event: any) {
            this.onClick.emit({ event: event, buttonLabel: this.buttonLabel })
      }

}