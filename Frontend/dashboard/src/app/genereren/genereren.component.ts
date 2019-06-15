declare var require: any;

import { Component, OnInit } from '@angular/core';
// import * as html2canvas from 'html2canvas';
const html2canvas = require('html2canvas');

// const html2canvas = require('html2canvas');

@Component({
  selector: 'app-genereren',
  templateUrl: './genereren.component.html',
  styleUrls: ['./genereren.component.scss']
})
export class GenererenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public exportHulppas() {
    html2canvas(document.getElementById('hulppas-voor'), { allowTaint : true }).then(canvas => {
      document.body.appendChild(canvas);
      const a = document.createElement('a');
      // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
      a.href = canvas.toDataURL('image/jpeg').replace('image/jpeg', 'image/octet-stream');
      a.download = 'hulppas-voor.jpg';
      a.click();
  });

    html2canvas(document.getElementById('hulppas-achter')).then(canvas => {
      document.body.appendChild(canvas);
      const a = document.createElement('a');
      // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
      a.href = canvas.toDataURL('image/jpeg').replace('image/jpeg', 'image/octet-stream');
      a.download = 'hulppas-achter.jpg';
      a.click();
    });
  }


}


