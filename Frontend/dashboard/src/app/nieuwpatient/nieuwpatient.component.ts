import { Component, OnInit } from '@angular/core';
import { Person } from '../_services';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
//import { Http } from '@angular/http';
declare var $: any;

@Component({
  selector: 'app-nieuwpatient',
  templateUrl: './nieuwpatient.component.html',
  styleUrls: ['./nieuwpatient.component.scss']
})
export class NieuwpatientComponent implements OnInit {
  PersoonId: string = '61';
  owner: string = 'resource:9186';
  naam: string;
  adres: string;
  geboortedatum: string;
  telefoon: string;
  verzekeringsgegevens: string;
  fotourl: string = 'http://unsplash.it/100/100';
  qrCode: string = '60';
  probleem: string;
  handeling1: string;
  handeling2: string;
  handeling: any = ['a', 'b'];
  huisartsId_h: string = '10';
  polieadres_h: string;
  telefoonnummer_h: string;
  spoedlijn_h: string;
  info_h: string;
  vertrouwenspersoon_vp: string = '10';
  naam_vp: string;
  relatie_vp: string;
  telefoonnummer_vp: string;
  medicatieId: string = '10';
  extra_m: string;
  bijwerkingen_m: string;
  bezit_m: boolean;

  url: string = "https://equidem.serveo.net/api/Persoon";

  constructor(
    private personService: Person,
    private http: HttpClient,
    private router: Router
    ) {

  }

  ngOnInit() {

  }

  async postPatient() {
    $('#btn-create').prop('disabled', true);
    $('#spinner').removeClass('d-none');
    $('#btn-txt').addClass('d-none');

    const httpOptions: { headers; observe; } = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      observe: 'response'
    };

    // let body = {
    //   'PersoonId':this.PersoonId,
    //   'owner':'resource:9186',
    //   'naam':this.naam,
    //   'adres': this.adres,
    //   'geboortedatum': this.geboortedatum,
    //   'telefoonnummer':this.telefoon,
    //   'verzekeringsgegevens':this.verzekeringsgegevens,
    //   'fotourl':"",
    //   'qrCode':this.qrCode,
    //   'probleem':this.probleem,
    //   'huisarts':'resource:1405',
    //   'handelingen':this.handeling,
    //   'vertrouwenspersonen':['resource:2446'],
    //   'medicijnenlijst':['resource:9318']
    // }

    let body = {
      "PersoonId": this.PersoonId,
      "owner": 'resource:9186',
      "naam": this.naam,
      "adres": this.adres,
      "geboortedatum": this.geboortedatum,
      "telefoonnummer": this.telefoon,
      "verzekeringsgegevens": this.verzekeringsgegevens,
      "fotourl": "hoi",
      "qrCode": this.qrCode,
      "probleem": this.probleem,
      "huisarts": 'resource:1405',
      "handelingen": [
        this.handeling1, this.handeling2
      ],
      "vertrouwenspersonen": [
        'resource:2446'
      ],
      "medicijnen": [
        'resource:9318'
      ]
    }
    console.log(body);
    //this.personService.postPatient(body);
    await this.http.post(this.url, body, httpOptions)
    .subscribe((data) => { console.log(data); } );

    //this.router.navigate(['/gegevens/'+this.PersoonId]);
  }

}
