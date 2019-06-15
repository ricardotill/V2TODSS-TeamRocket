import { Component } from '@angular/core';
import * as $ from 'jquery';
import * as html2canvas from 'html2canvas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dashboard';
  router: string;

  constructor(private _router: Router){
    this.router = _router.url;
  }
}
