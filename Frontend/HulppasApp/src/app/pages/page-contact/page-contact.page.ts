import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.page.html',
  styleUrls: ['./page-contact.page.scss'],
})
export class PageContactPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;

  tel: string = 'tel:';
  phone: number = 31612345678;
  telPhone: string = this.tel + this.phone;

  constructor() { }

  ngOnInit() {
  }


  ScrollTo(element: string) {
    let yOffset = document.getElementById(element).offsetTop - 10;
    this.content.scrollToPoint(0, yOffset, 1000)
  }
}
