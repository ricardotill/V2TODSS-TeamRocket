import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, LoadingController } from '@ionic/angular';
import { PersonService } from 'src/app/services/person.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-page-medicatie',
  templateUrl: './page-medicatie.page.html',
  styleUrls: ['./page-medicatie.page.scss'],
})
export class PageMedicatiePage implements OnInit {

  constructor(private personService: PersonService) { }

  ngOnInit() {
  }

}
