import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { LoadingController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class PersonService {
  url: string;
  person: any;
  huisarts: string[];
  vertrouwenspersonen:  {}[];
  medicijnen: any;

  constructor(private http: Http, private loadingCtrl: LoadingController) {
    this.url = "http://simplex.serveo.net/api/persoonPoc/";
  }

  async getPerson(qr_code) {
    let loading = await this.loadingCtrl.create();
    await loading.present();
    this.http.get(this.url + qr_code)
      .subscribe(
        (person) => {
          this.person = person.json();
          this.getHuisarts();
          this.getMedicijnen();
          this.getVertrouwenspersonen();
          loading.dismiss();
        });
  };

  getHuisarts() {
    this.huisarts = this.person.huisarts.split(",");

  };

  getVertrouwenspersonen() {
    var array = new Array();
    for (var i = 0, len = this.person.vertrouwenspersonen.length; i < len; i++) {
      let element = this.person.vertrouwenspersonen[i].split(",");
      let JSONelement = 
      ({
        naam: element[0],
        adres: element[1],
        telefoonnummer : element[2],
        relatie : element[3],  
      });
      array.push(JSONelement);
    }
    this.vertrouwenspersonen = array;

  };

  getMedicijnen() {
    var array = new Array();
    for (var i = 0, len = this.person.medicijnen.length; i < len; i++) {
      let element = this.person.medicijnen[i].split(",");
      let JSONelement = 
      ({
        id: element[0],
        naam: element[1],
        bijwerkingen : element[2],
        frequentie : element[3],  
        bezit : element[4],  
        extra : element[5],  
      });
      array.push(JSONelement);
    }
    this.medicijnen = array;
  };


}
