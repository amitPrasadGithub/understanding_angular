import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'odd-component',
    templateUrl: './odd.component.html'
})
export class OddComponent implements OnInit {

    @Input('odd') odd: Array<number> = []

    ngOnInit() {}
}