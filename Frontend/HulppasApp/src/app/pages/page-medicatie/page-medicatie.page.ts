import { Component } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-page-medicatie',
  templateUrl: './page-medicatie.page.html',
  styleUrls: ['./page-medicatie.page.scss'],
})
export class PageMedicatiePage {
  collapse: boolean = false;
  automaticClose : boolean = false;

  constructor(private personService: PersonService) { }

  ionViewDidEnter(){
  }

  toggle() {
    if(this.collapse == true){
      this.collapse = false;
    }
    else{
      this.collapse = true;
    }
  }
}
