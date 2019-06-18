import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.page.html',
  styleUrls: ['./page-login.page.scss'],
})
export class PageLoginPage implements OnInit {
  name: string;
  password: string;

  constructor(private storage: Storage, 
              private router: Router,
              private alertController: AlertController) { }

  ngOnInit() {
  }

  Login() {
    if (this.name == undefined || this.password == undefined) {
      alert("Please fill in both the values.");
    } else {
      console.log(this.name, this.password);
      this.storage.set('id',this.name);
      this.loginCorrect();
    }
  }

  async loginCorrect(){

      const alert = await this.alertController.create({
        header: 'Succes!',
        message: 'U krijgt nu meer informatie te zien over een persoon',
        buttons: [
          {
            text: 'confirm',
            handler: () => {
              this.router.navigate(['page-qr-code']);
            }
          }
        ]
      });
      await alert.present();
  };
}
