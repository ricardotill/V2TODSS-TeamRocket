import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { LoginCheckService } from '../../services/login-check.service';
import { LoadingController, NavParams } from '@ionic/angular';
import { Http } from '@angular/http';

import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-info',
  templateUrl: './page-info.page.html',
  styleUrls: ['./page-info.page.scss'],
})
export class PageInfoPage implements OnInit {
  person: any;
  data = [];
  hash: string;

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
    this.getPersonFromApi();
    this.loginService.checkLogin();
    this.getHash();
  }

  getPersonFromApi() {
    this.personService.personVariable();
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

  getHash(){
    this.route.queryParams.subscribe(params => {
        console.log(params);
        this.hash = params.hash;
        alert(this.hash);
      });
  }
}

