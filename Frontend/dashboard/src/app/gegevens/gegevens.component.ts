import { Component, OnInit } from '@angular/core';
import { Person } from '../_services/person.service';
declare var $: any;

@Component({
  selector: 'app-gegevens',
  templateUrl: './gegevens.component.html',
  styleUrls: ['./gegevens.component.scss']
})
export class GegevensComponent implements OnInit {

  constructor(private personService: Person) { }

  // TODO maak dat 1e 10 users worden opgehaald, daarna 20, etc etc. Maak person objecten

  insertPerson(code, naam, geboortedatum, telefoon) {
    var editButtons = '<a href="/medicijnen/'+ code +'" class="btn btn-primary btn-sm mr-1" data-toggle="tooltip" data-placement="top" title="Bekijk/wijzig medicijnen"><i class="fas fa-pills"></i></a><a href="/gegevens/'+ code +'" class="btn btn-primary btn-sm" data-toggle="tooltip" data-placement="top" title="Bekijk/wijzig details patiënt"><i class="fas fa-edit"></i></a>';
    var markup = "<tr><th scope='row'>"+ code +"</th><td>" + naam + "</td><td>" + geboortedatum + "</td><td>" + telefoon + "</td><td>" + editButtons + "</td></tr>";
    $("table tbody").append(markup);
  }

  ngOnInit() {
    this.insertPerson(1, 'Fred E', '11-11-2019', '+316 000000000');

    $('[data-toggle="tooltip"]').tooltip();

  }
}
