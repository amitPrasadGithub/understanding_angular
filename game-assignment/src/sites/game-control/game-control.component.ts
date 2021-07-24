import { Component, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'game-control-component',
    templateUrl: './game-control.component.html'
})
export class GameControlComponent {
    
    interval: any;
    lastNumber: number = 0;

    @Output('fireNumberEvent') fireNumberEvent = new EventEmitter<number>();

    onStartGame() {
        this.interval = setInterval(()=> {
            this.lastNumber = this.lastNumber + 1;
            this.fireNumberEvent.emit(this.lastNumber);
        },2000);
    }

    onPauseGame() {
        clearInterval(this.interval);
    }
    ngOnInit(){}
}