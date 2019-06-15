import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.page.html',
  styleUrls: ['./page-login.page.scss'],
})
export class PageLoginPage implements OnInit {
  name: string;
  password: string;

  constructor(private storage: Storage, private router: Router) { }

  ngOnInit() {
  }

  Login() {
    if (this.name == undefined || this.password == undefined) {
      alert("Please fill in both the values.");
    } else {
      console.log(this.name, this.password);
      this.router.navigate(["/tabs/pages/page-info"]);
      this.storage.set('id',this.name);
      //Hier komt de post en de response opslaan in de storage
    }
  }
}
