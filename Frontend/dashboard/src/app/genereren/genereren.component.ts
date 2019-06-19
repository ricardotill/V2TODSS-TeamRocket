declare var require: any;
declare var $: any;

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../_services';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
// import * as html2canvas from 'html2canvas';
const html2canvas = require('html2canvas');

// const html2canvas = require('html2canvas');

@Component({
  selector: 'app-genereren',
  templateUrl: './genereren.component.html',
  styleUrls: ['./genereren.component.scss']
})
export class GenererenComponent implements OnInit {
  person: any;
  voornaam: string;
  tussenvoegsel: string = "";
  achternaam: string;

  constructor(
    public personService: Person,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.personService.getPatient(id);



    // let credentials = this.person.naam.split(' ');
    // if (credentials.length == 2) {
    //   this.voornaam = credentials[0];
    //   this.achternaam = credentials[1];
    // } else {
    //   let fnPassed = false;
    //   credentials.forEach(cred => {
    //     if (!fnPassed) {
    //       this.voornaam = cred;
    //     } else {
    //       if (credentials.lastIndexOf(cred) == (credentials.length - 1)) {
    //         this.achternaam = cred;
    //       } else {
    //         this.tussenvoegsel += (cred+" ");
    //       }
    //     }
    //   });
    // console.log(this.person);
  }

  public exportHulppas() {
    html2canvas(document.getElementById('hulppas-voor'), { allowTaint : true, useCORS : true }).then(canvas => {
      const a = document.createElement('a');
      // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
      a.href = canvas.toDataURL('image/jpeg').replace('image/jpeg', 'image/octet-stream');
      a.download = 'hulppas-voor.jpg';
      a.click();
  });

    html2canvas(document.getElementById('hulppas-achter'), { allowTaint : true, useCORS : true }).then(canvas => {
      const a = document.createElement('a');
      // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
      a.href = canvas.toDataURL('image/jpeg').replace('image/jpeg', 'image/octet-stream');
      a.download = 'hulppas-achter.jpg';
      a.click();
    });
  }


}


