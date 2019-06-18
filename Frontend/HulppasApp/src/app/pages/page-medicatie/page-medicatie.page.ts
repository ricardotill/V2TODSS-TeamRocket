import { Component } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-page-medicatie',
  templateUrl: './page-medicatie.page.html',
  styleUrls: ['./page-medicatie.page.scss'],
})
export class PageMedicatiePage {

  constructor(private personService: PersonService) { }
}
