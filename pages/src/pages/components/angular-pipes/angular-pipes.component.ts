import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-angular-pipes-component',
    templateUrl: './angular-pipes.component.html'
})
export class AngularPipesComponent implements OnInit {
    str: string = '';
    operation: string = ''
    replace: string = '';
    replace_from: string = ''

    options: Array<string> = [
        'UPPERCASE',
        'LOWERCASE',
        'REMOVE DUPLICATE CHARACTERS',
        'REPLACE CHARACTER'
    ]

    ngOnInit() {}

    onManipulate() {

    }
}