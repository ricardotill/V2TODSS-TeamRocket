import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PersonService {
  urlPt0: string;
  urlPt1: string;
  person: any;


  constructor(public http: Http) {
    this.urlPt0 = "https://thingproxy.freeboard.io/fetch/";
    this.urlPt1  =   "http://hulppas.herokuapp.com/api/verwardepersoon";
   }

  getPerson() {
    return this.http.get(this.urlPt1).pipe(map(res => res.json()));
  }
  
  personVariable(){
    this.getPerson()
      .subscribe(person => {
      this.person = person;
      console.log(this.person);
    });
  }
}
