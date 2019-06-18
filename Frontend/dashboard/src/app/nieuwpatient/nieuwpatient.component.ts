import { Component, OnInit } from '@angular/core';
import { Person } from '../_services';
import { Http } from '@angular/http';

@Component({
  selector: 'app-nieuwpatient',
  templateUrl: './nieuwpatient.component.html',
  styleUrls: ['./nieuwpatient.component.scss']
})
export class NieuwpatientComponent implements OnInit {
  PersoonId: string = "60";
  owner: string = "resource:9186";
  naam: string;
  adres: string;
  geboortedatum: string;
  telefoon: string;
  verzekeringsgegevens: string;
  fotourl: string = "http://unsplash.it/100/100";
  qrCode: string = "60";
  probleem: string;
  handeling1: string;
  handeling2: string;
  handeling: any = [this.handeling1, this.handeling2];
  huisartsId_h: string = "10";
  polieadres_h: string;
  telefoonnummer_h: string;
  spoedlijn_h: string;
  info_h: string;
  vertrouwenspersoon_vp: string = "10"
  naam_vp: string;
  relatie_vp: string;
  telefoonnummer_vp: string;
  medicatieId: string = "10";
  extra_m: string;
  bijwerkingen_m: string;
  bezit_m: boolean;

  url: string;

  constructor(private personService: Person, private http: Http) {

  }

  ngOnInit() {

  }

  postPatient() {
    let body = {
      "persoonId":this.PersoonId,
      "owner":this.owner,
      "naam":this.naam,
      "adres": this.adres,
      "telefoon":this.telefoon,
      "verzekeringsgegevens":this.verzekeringsgegevens,
      "fotourl":this.fotourl,
      "qrCode":this.qrCode,
      "probleem":this.probleem,
      "huisarts":"resource:1",
      "handeling":this.handeling,
      "vertrouwenspersonen":"resource:1",
      "mediciijnenlijst":"resource:1"
    }
    console.log(body);
    //this.personService.postPatient(body);
    console.log(this.http.post(this.url, body));
  }

}
