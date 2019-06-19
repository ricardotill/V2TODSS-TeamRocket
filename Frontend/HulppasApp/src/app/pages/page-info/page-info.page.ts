import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { LoginCheckService } from '../../services/login-check.service';
import { LoadingController } from '@ionic/angular';
import { Http } from '@angular/http';

import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-info',
  templateUrl: './page-info.page.html',
  styleUrls: ['./page-info.page.scss'],
})
export class PageInfoPage implements OnInit {

  // loggedin: string = "ja";

  constructor(private loadingCtrl: LoadingController,
    private personService: PersonService,
    private loginService: LoginCheckService,
    public http: Http,
    private alertController: AlertController,
    private router: Router,
    private route: ActivatedRoute){
    }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.loginService.checkLogin();
  }

  async logData() {
    const alert = await this.alertController.create({
      header: 'Log',
      inputs: [
        {
          name: 'log',
          type: 'text',
          placeholder: 'Wat heeft u gedaan'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log(data.log);
            this.router.navigate(["/page-qr-code"]);
            
          }
        }
      ]
    });

    await alert.present();
  }
}

