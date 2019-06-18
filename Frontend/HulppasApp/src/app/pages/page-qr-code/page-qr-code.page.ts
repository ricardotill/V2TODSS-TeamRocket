import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';
import { LoginCheckService } from 'src/app/services/login-check.service';

@Component({
  selector: 'app-page-qr-code',
  templateUrl: './page-qr-code.page.html',
  styleUrls: ['./page-qr-code.page.scss'],
})
export class PageQrCodePage {

  constructor(private barcodeScanner: BarcodeScanner,
    private router: Router,
    private personService: PersonService,
    private loginService: LoginCheckService) { }

    ionViewDidEnter() {
    this.loginService.checkLogin();
    console.log(this.loginService.check);
  }

  scanQr() {
    this.barcodeScanner.scan().then(data => {
      this.personService.getPerson(data.text).then(() => {
        this.router.navigate(['/tabs/pages/page-info']);
      });
    }).catch(err => {
      console.log('Error', err);
    });
  }
}
