import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { LoadingController } from '@ionic/angular';
import { Http } from '@angular/http';

@Component({
  selector: 'app-page-info',
  templateUrl: './page-info.page.html',
  styleUrls: ['./page-info.page.scss'],
})
export class PageInfoPage implements OnInit {
  person: any;
  data = [];

  constructor(private loadingCtrl: LoadingController, private personService: PersonService, public http: Http) { }

  ngOnInit() {
    this.getPersonFromApi();
  }

  getPersonFromApi(){
    this.personService.personVariable();
  }
}
