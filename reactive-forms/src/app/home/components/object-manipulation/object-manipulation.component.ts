import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-manipulation',
  templateUrl: './object-manipulation.component.html',
  styleUrls: ['./object-manipulation.component.scss']
})
export class ObjectManipulationComponent implements OnInit {

  columnOptions: any = {
    firstName: "First Name",
    lastName: "Last Name",

  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
