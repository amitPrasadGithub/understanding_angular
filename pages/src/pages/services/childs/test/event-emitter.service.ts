import { EventEmitter } from '@angular/core';

export class EventEmitterService {
    e_emitter = new EventEmitter<string>();
}