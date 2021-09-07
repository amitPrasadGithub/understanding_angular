import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from 'src/pages/services/childs/test/event-emitter.service';

@Component({
    selector: 'app-parent-component',
    templateUrl: './app-parent.component.html'
})
export class ParentComponent implements OnInit {
    activeContact: string;

    constructor(
        private eventEmitterService: EventEmitterService
    ) {}
    ngOnInit()  {
        this.eventEmitterService.e_emitter.subscribe(
            (data) => {
                this.activeContact = data;
            }
        )
    }
}