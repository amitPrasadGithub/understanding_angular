import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-angular-pipes-component',
    templateUrl: './angular-pipes.component.html'
})
export class AngularPipesComponent implements OnInit {

    username = 'Max';
    birthday = '11-Nov-1996';

    str = 'eearr';

    sentence: string = 'my-name-is-cipher';
    ngOnInit() {}
}