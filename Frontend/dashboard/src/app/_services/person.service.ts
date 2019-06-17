import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import {throwError, Observable} from 'rxjs';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class Person {
  allUrl: string;
  byCodeUrl: string;
  examplePhoto: string;
  public patients: any;

  // TODO fix errors


  constructor(private http: Http) {
    this.allUrl  =   "http://quater.serveo.net/api/persoon";
    this.examplePhoto = "http://unsplash.it/100/100";
    this.byCodeUrl = "";
  }

  getPatients() {
    return this.http.get(this.allUrl).pipe(map(res => res.json()));
  }

  postPatient() {
    let body =
    {
      "$class": "org.example.basic.Persoon",
      "PersoonId": "string",
      "adres": "string",
      "geboortedatum": "string",
      "telefoon": "string",
      "verzekeringsgegevens": "string",
      "fotourl": "string",
      "qrCode": "string",
      "probleem": "string",
      "Huisarts": [],
      "handeling": [],
      "vertrouwenspersonen": [],
      "mediciijnlijst": []
    };

    return this.http.post(this.allUrl, body);
  }

  async personVariable(){
    await this.getPatients()
      .subscribe(person => {
      this.patients = person;
      console.log(this.patients);
    });
  }
}
