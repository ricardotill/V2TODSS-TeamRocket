import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class PersonService {
  urlPt0: string;
  urlPt1: string;
  person: any;


  constructor(private http: Http, private loadingCtrl: LoadingController) {
    this.urlPt0 = "https://thingproxy.freeboard.io/fetch/";
    this.urlPt1  =   "http://hulppas.herokuapp.com/api/verwardepersoon";
   }

  getPerson() {
    return this.http.get(this.urlPt1).pipe(map(res => res.json()));
  }
  
  async personVariable(){
    let loading = await this.loadingCtrl.create();
    await loading.present();
    this.getPerson()
      .subscribe(person => {
      this.person = person;
      loading.dismiss();
    });
  }
}
