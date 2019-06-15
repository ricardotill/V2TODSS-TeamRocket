import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LoginCheckService {
  check: any;

  constructor(private storage: Storage) { }

  checkLogin(){
    this.storage.ready().then(() => {
      this.storage.get('id')
        .then((val) => {
          this.check = val;
        })
        .catch( (e) => {
          console.log("error: " + e);
        })
    });
  }


}
