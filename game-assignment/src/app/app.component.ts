import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game-assignment';

  even: Array<number> = [];
  odd: Array<number> = [];

  fireNumberEvent(num: number) {
    if(num % 2 == 0)
      this.even.push(num);
    else 
      this.odd.push(num);
  }

}
