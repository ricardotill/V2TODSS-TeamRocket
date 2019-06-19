import { Component, OnInit } from '@angular/core';
import { Person } from '../_services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medicijnen',
  templateUrl: './medicijnen.component.html',
  styleUrls: ['./medicijnen.component.scss']
})
export class MedicijnenComponent implements OnInit {
  constructor(
    public personService: Person,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.personService.getPatient(id);
  }

}
