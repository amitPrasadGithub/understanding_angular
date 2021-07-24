import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'even-component',
    templateUrl: './even.component.html'
})
export class EvenComponent implements OnInit {
    @Input('even') even: Array<number> = []
    
    ngOnInit() {}
}