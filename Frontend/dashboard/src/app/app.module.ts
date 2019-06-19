import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GegevensComponent } from './gegevens/gegevens.component';
import { MedicijnenComponent } from './medicijnen/medicijnen.component';
import { GenererenComponent } from './genereren/genereren.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PatientComponent } from './patient/patient.component';
import { VertrouwenspersonenComponent } from './vertrouwenspersonen/vertrouwenspersonen.component';
import { NieuwpatientComponent } from './nieuwpatient/nieuwpatient.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GegevensComponent,
    MedicijnenComponent,
    GenererenComponent,
    LoginComponent,
    FooterComponent,
    LogoutComponent,
    HomepageComponent,
    PatientComponent,
    VertrouwenspersonenComponent,
    NieuwpatientComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
