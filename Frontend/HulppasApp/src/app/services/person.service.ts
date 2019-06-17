import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class PersonService {
  url: string;
  person: any;


  constructor(private http: Http, private loadingCtrl: LoadingController) {
    this.url = "http://quater.serveo.net/api/persoon";
  }

  async getPerson(qr_code) {
    let loading = await this.loadingCtrl.create();
    await loading.present();
    this.http.get(this.url+"/"+qr_code)
      .subscribe(
        (person) => {
          this.person = person.json();
          console.log(this.person);
          loading.dismiss();
        });
  };
}
