import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class Person {
  url: string;
  public patients: any;
  public patient: any;

  // TODO fix errors


  constructor(private http: Http) {
    this.url = "https://equidem.serveo.net/api/Persoon";
  }

  getPatients() {
    //Get all patient
    return this.http.get(this.url).pipe(map(res => res.json()));
  }

  getPatient(id) {
    this.http.get(this.url + '/' + id)
      .subscribe(
        (person) => {
          this.patient = person.json();
          console.log(this.patient);
        });
  };

  postPatient(body) {
    // New patient
    return this.http.post(this.url, body);
  }

  putPatient(id, body) {
    // Update patient
    return this.http.put(this.url + '/' + id, body);
  }

  deletePatient(id) {
    // Delete patient
    return this.http.delete(this.url + id).pipe(map(res => res.json()));
  }

  // async personsVariable() {
  //   await this.getPatients()
  //     .subscribe(person => {
  //       this.patients = person;
  //       console.log(this.patients);
  //     });
  // }

  // async personVariable(id) {
  //   let p;
  //   this.getPatient(id)
  //     .subscribe((person) => {
  //       this.patient = person;
  //       console.log(this.patient);
  //     });
  //   return this.patient;
  //   // this.patient = p;
  //   // console.log(this.patient);
  // }
}
