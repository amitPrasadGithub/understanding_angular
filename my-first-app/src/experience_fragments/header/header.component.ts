import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    @Output()  featureSelected = new EventEmitter<string>();
    ngOnInit() {}
    
    onSelect(feature: string) {
        this.featureSelected.emit(feature);
    }
}