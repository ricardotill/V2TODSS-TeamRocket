import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  url: string;
  headerDict: any;
  requestOptions: any;

  constructor(public http: Http) {
    this.url  = "http://hulppas.herokuapp.com/api/verwardepersoon";
    this.headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*'
    }
    
    this.requestOptions = {                                                                                                                                                                                 
      headers: new Headers(this.headerDict), 
    };
   }

  getPerson() {
    return this.http.get(this.url, this.requestOptions)
      .pipe(map(res => res.json()));
  }
}
