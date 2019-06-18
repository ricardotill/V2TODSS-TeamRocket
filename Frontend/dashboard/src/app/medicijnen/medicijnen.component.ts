import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicijnen',
  templateUrl: './medicijnen.component.html',
  styleUrls: ['./medicijnen.component.scss']
})
export class MedicijnenComponent implements OnInit {
  jsonTemplate: {};
  constructor() {
    this.jsonTemplate = {
      "naam": "",
      "frequentie": "",
      "bijzich": "",
      "opmerkingen" : ""
    }
  }

  ngOnInit() {
  }

}
