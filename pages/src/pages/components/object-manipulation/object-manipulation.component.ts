import { Component, OnInit } from "@angular/core";

@Component({
      selector: 'app-object-manipulation',
      templateUrl: './object-manipulation.component.html'
})
export class ObjectManipulationComponent  implements OnInit {

      ngOnInit() {
            this.objectManipulation();
      }

      objectManipulation() {
            let person = {
                  name: 'amit',
                  age: 25
            }

            person['city'] = 'nagpur';

            console.log(person);
      }
      
}