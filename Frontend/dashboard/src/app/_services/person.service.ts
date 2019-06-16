import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import {throwError, Observable} from 'rxjs';

export class Vertrouwenspersoon {
  naam: string;
  adres: string;
  telefoon: string;
  relatie: string;
}

export class Huisarts {
  naam: string;
  polieadres: string;
  telefoonnummers: string[];
}

export interface Patient {
  naam: string;
  adres: string;
  geboortedatum: string;
  telefoon: string;
  verzekeringsgegevens: string;
  foto: string;
  qrcode: number;
  probleem: string;

  huisarts: Huisarts;
  medicijnen: string[];
  vertrouwenspersonen: Vertrouwenspersoon[];
}

export interface ResponsePatients {
  results: Patient[];
}

@Injectable({
  providedIn: 'root'
})
export class Person {
  allUrl: string;
  byCodeUrl: string;
  person: any;

  // TODO fix errors


  constructor(private http: HttpClient) {
    this.allUrl  =   "http://hulppas.herokuapp.com/api/verwardepersoon";
    this.byCodeUrl = "";
  }

  getPatients() {
    return this.http.get<string>(this.allUrl);
  }
}
