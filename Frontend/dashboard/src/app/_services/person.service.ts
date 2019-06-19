import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Http } from '@angular/http';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class Person {
  url: string;
  public patients: any;
  public patient: any;
  public loading: boolean;

  // TODO fix errors


  constructor(private http: Http, private httpClient: HttpClient) {
    this.url = "http://illo.serveo.net/api/Persoon";
  }

  getPatients() {
    //Get all patient
    return this.http.get(this.url).pipe(map(res => res.json()));
  }

  getPatient(id) {
    return this.http.get(this.url + '/' + id)
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

  async putPatient() {
    $('#btn-create').prop('disabled', true);
    $('#spinner').removeClass('d-none');
    $('#btn-txt').addClass('d-none');

    let body = {
      '$class': "org.example.basic.Persoon",
      'owner':'resource:9186',
      'naam':this.patient.naam,
      'adres': this.patient.adres,
      'geboortedatum': this.patient.geboortedatum,
      'telefoonnummer':this.patient.telefoonnummer,
      'verzekeringsgegevens':this.patient.verzekeringsgegevens,
      'fotourl':this.patient.fotourl,
      'qrCode':this.patient.qrCode,
      'probleem':this.patient.probleem,
      'huisarts':'resource:1405',
      'handelingen':this.patient.handelingen,
      'vertrouwenspersonen':['resource:2446', 'resource:6558'],
      'medicijnen':['resource:9318']
    }
    console.log(body);

    const httpOptions: { headers; observe; } = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      observe: 'response'
    };

    await this.httpClient.put(this.url+'/'+this.patient.PersoonId, body, httpOptions)
    .subscribe((data) => { console.log(data); } );

    $('#btn-create').prop('disabled', false);
    $('#spinner').addClass('d-none');
    $('#btn-txt').removeClass('d-none');
  }

  async deletePatient() {
    // Delete patient
    const httpOptions: { headers; observe; } = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      observe: 'response'
    };

    await this.httpClient.delete(this.url+'/'+this.patient.PersoonId, httpOptions)
    .subscribe((data) => { console.log(data); } );
  }

  async personsVariable() {
    this.loading = true;
    await this.getPatients()
      .subscribe(person => {
        this.patients = person;
        console.log(this.patients);
      });
    this.loading = false;
  }

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
