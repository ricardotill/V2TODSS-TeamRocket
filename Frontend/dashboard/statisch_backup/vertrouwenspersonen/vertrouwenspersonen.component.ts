import { Component, OnInit } from '@angular/core';
import { Person } from '../_services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vertrouwenspersonen',
  templateUrl: './vertrouwenspersonen.component.html',
  styleUrls: ['./vertrouwenspersonen.component.scss']
})
export class VertrouwenspersonenComponent implements OnInit {

  constructor(
    public personService: Person,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.personService.getPatient(id);
  }

}
