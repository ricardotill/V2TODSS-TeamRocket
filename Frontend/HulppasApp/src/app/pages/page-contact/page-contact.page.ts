import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { PersonService } from 'src/app/services/person.service';
import { LoginCheckService } from 'src/app/services/login-check.service';

@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.page.html',
  styleUrls: ['./page-contact.page.scss'],
})
export class PageContactPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;

  tel: string = 'tel:';
  person: any;

  constructor(private loginService: LoginCheckService,
              private personService: PersonService) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.loginService.checkLogin();
  }

  ScrollTo(element: string) {
    let yOffset = document.getElementById(element).offsetTop - 10;
    this.content.scrollToPoint(0, yOffset, 1000)
  }
}
