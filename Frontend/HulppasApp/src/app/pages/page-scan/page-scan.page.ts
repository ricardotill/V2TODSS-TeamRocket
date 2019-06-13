import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-scan',
  templateUrl: './page-scan.page.html',
  styleUrls: ['./page-scan.page.scss'],
})
export class PageScanPage {

  constructor(private qrScanner: QRScanner, private router: Router) { }

  ionViewDidEnter() {
    this.scanQR();
    console.log("yeet");
  }

  startScan() {
    let scanSub = this.qrScanner.scan().subscribe((text: string) => {
      console.log('Scanned something', text);
      this.qrScanner.hide(); // hide camera preview
      scanSub.unsubscribe(); // stop scanning
      console.log("Scanner closed");
      // alert(text); // Show text in alert

      // after scan
      if (text != '') {
        alert(text);
        this.qrScanner.hide(); // hide camera preview
        scanSub.unsubscribe(); // stop scanning
        this.router.navigate(["/tabs/pages/page-info"]);
      }else{
        alert("empty qr");
      }

    });
  }

  scanQR() {

    // Optionally request the permission early
    this.qrScanner.prepare()
    .then((status: QRScannerStatus) => {
      if (status.authorized) {
        // camera permission was granted
        // alert('authorized');

        // start scanning
        this.startScan();

        this.qrScanner.resumePreview();

        // show camera preview
        this.qrScanner.show()
        .then((data : QRScannerStatus)=> { 
          console.log('Data status', data);
          //alert(data.showing);
        },err => {
          alert(err);
        });

        // wait for user to scan something, then the observable callback will be called
      } else if (status.denied) {
        alert('denied');
        // camera permission was permanently denied
        // you must use QRScanner.openSettings() method to guide the user to the settings page
        // then they can grant the permission from there
      } else {
        // permission was denied, but not permanently. You can ask for permission again at a later time.
        alert('else');
      }
    })
    .catch((e: any) => {
      alert('Error is' + e);
    });
  }
}
