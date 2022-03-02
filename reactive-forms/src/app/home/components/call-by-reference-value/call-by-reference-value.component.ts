import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-by-reference-value',
  templateUrl: './call-by-reference-value.component.html',
  styleUrls: ['./call-by-reference-value.component.scss']
})
export class CallByReferenceValueComponent implements OnInit {

  status: any = "enabled";
  person: any = {
    name: "amit"
  }

  constructor() { }

  ngOnInit(): void {
    this.selectStatus();
  }

  selectStatus() {
    debugger;
    let m_status = this.status;
    m_status = "disabled";

    let person = this.person;
    person['name'] = "zain";
    debugger
  }

}
