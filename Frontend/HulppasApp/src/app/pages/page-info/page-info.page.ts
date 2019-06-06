import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { HTTP } from '@ionic-native/http/ngx';
import { Platform, LoadingController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-page-info',
  templateUrl: './page-info.page.html',
  styleUrls: ['./page-info.page.scss'],
})
export class PageInfoPage implements OnInit {
  person: any;
  data = [];

  constructor(private http: HttpClient, private nativeHttp: HTTP, private plt: Platform, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    // this.getPersonFromApi();
    this.getDataNativeHttp();
  }

  // getPersonFromApi(){
  //   this.personService.getPerson()
  //     .subscribe(person => {
  //     this.person = person;
  //     console.log(this.person);
  //   });
  // }

  async getDataNativeHttp() {
    let loading = await this.loadingCtrl.create();
    await loading.present();
 
    // Returns a promise, need to convert with of() to Observable (if want)!
    from(this.nativeHttp.get('http://hulppas.herokuapp.com/api/verwardepersoon', {}, {'Content-Type': 'application/json'})).pipe(
      finalize(() => loading.dismiss())
    ).subscribe(data => {
      let parsed = JSON.parse(data.data);
      this.data = parsed.results;
      console.log(this.data);
    }, err => {
      console.log('Native Call error: ', err);
    });
  }
  

}
