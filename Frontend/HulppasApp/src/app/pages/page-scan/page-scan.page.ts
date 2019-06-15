import { Component } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-page-scan',
  templateUrl: './page-scan.page.html',
  styleUrls: ['./page-scan.page.scss'],
})
export class PageScanPage {

  constructor(private qrScanner: QRScanner, 
              private router: Router,
              private navCtrl: NavController) { }

  ionViewDidEnter() {
    this.scanQR();
  }

  startScan() {
    let scanSub = this.qrScanner.scan().subscribe((text: string) => {
      this.qrScanner.hide();
      scanSub.unsubscribe();

      if (text != '') {
        alert(text);
        this.router.navigate(
          ["/tabs/pages/page-info"],
          { queryParams: { hash: text } }  );
        this.qrScanner.hide();
        scanSub.unsubscribe();
      }else{
      }

    });
  }

  scanQR() {
    this.qrScanner.prepare()
    .then((status: QRScannerStatus) => {
      if (status.authorized) {
        this.startScan();
        this.qrScanner.resumePreview();
        this.qrScanner.show()
        .then((data : QRScannerStatus)=> { 
        },err => {
          alert("error: "+ err);
        });
      } else if (status.denied) {
        alert('Allow access to the camera in the settings of your phone');
      } else {
        alert('Something went wrong.');
      }
    })
    .catch((e: any) => {
      alert('Unavailable, error code: ' + e);
      this.router.navigate([""]);
    });
  }
}
