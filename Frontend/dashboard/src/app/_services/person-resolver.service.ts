import { Injectable } from '@angular/core';
import { Resolve, Route, ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { ActivatedRouteSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonResolverService implements Resolve<any> {
  persoonUrl: string;
  medicatieUrl: string;
  vpersoonUrl: string;
  artsUrl: string;
  constructor(
    private http: Http,
    private route: ActivatedRoute
  ) {
    this.persoonUrl = "https://equidem.serveo.net/api/Persoon";
    this.medicatieUrl = "https://equidem.serveo.net/api/medicatie"
    this.artsUrl = "https://equidem.serveo.net/api/huisarts"
    this.vpersoonUrl = "https://equidem.serveo.net/api/vertrouwpersoon"
  }


  async resolve(route: ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot) {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    // let id;
    // await this.route.paramMap.subscribe(params => {
    //     id = (params.get('id'));
    //     console.log(id);
    //   });
    // return this.http.get(this.persoonUrl+'/'+route.paramMap('id'));
    return this.http.get(this.persoonUrl+'/'+id);
  }

  // personVariable(id){
  //   let patient;
  //   this.http.get(this.persoonUrl+'/'+id).pipe(map(res => res.json()))
  //     .subscribe((person) => {
  //     patient = person;
  //     console.log(patient);
  //   });
  //   return patient;

  //   this.http.get(this.persoonUrl+'/'+id).pipe(map(res => res.json()))
  //     .subscribe((person) => {
  //     patient = person;
  //     console.log(patient);
  //   });
  // }
}
