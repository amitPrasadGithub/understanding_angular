import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from 'src/pages/services/childs/test/event-emitter.service';

@Component({
    selector: 'app-event-emitter-component',
    templateUrl: './event-emitter.component.html'
})
export class EventEmitterComponent implements OnInit {
    contact: string = ''
    constructor(
        private eventEmitterService: EventEmitterService
    ) {}
    ngOnInit() {

    }

    activate() {
        this.eventEmitterService.e_emitter.emit(this.contact);
    }
}