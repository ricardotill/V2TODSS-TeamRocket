import { Component } from '@angular/core';
// import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PersonService } from '../../services/person.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-page-scan',
  templateUrl: './page-scan.page.html',
  styleUrls: ['./page-scan.page.scss'],
})
export class PageScanPage {
  constructor(
    private router: Router,
    private navCtrl: NavController,
    private person: PersonService,
    private barcodeScanner : BarcodeScanner) { }
}
