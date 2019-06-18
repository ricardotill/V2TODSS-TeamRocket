import { Component, OnInit } from '@angular/core';
import { Person } from '../_services/person.service';
declare var $: any;

@Component({
  selector: 'app-gegevens',
  templateUrl: './gegevens.component.html',
  styleUrls: ['./gegevens.component.scss']
})
export class GegevensComponent implements OnInit {
  person: any;

  constructor(private personService: Person) {}

  ngOnInit() {
    this.showPatients();

    $('[data-toggle="tooltip"]').tooltip();

  }

  showPatients() {
    this.personService.personsVariable();
  }
}
