import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Person {
  urlAll: string;
  urlByCode: string;
  person: any;

  // TODO fix errors


  constructor(private http: Http) {
    this.urlAll  =   "http://hulppas.herokuapp.com/api/verwardepersoon";
  }

  getAll() {
    return this.http.get(this.urlPt0).pipe(map(res => res.json()));
  }

  getByCode() {
    return this.http.get(this.urlPt0).pipe(map(res => res.json()));
  }
}
