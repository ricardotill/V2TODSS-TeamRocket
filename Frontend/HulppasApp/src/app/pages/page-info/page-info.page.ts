import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-page-info',
  templateUrl: './page-info.page.html',
  styleUrls: ['./page-info.page.scss'],
})
export class PageInfoPage implements OnInit {
  person: any;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getPersonFromApi();
  }

  getPersonFromApi(){
    this.personService.getPerson()
      .subscribe(person => {
      this.person = person;
      console.log(this.person);
    });
  }

}
