import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { HomepageComponent } from './homepage/homepage.component';
import { GegevensComponent } from './gegevens/gegevens.component';
import { MedicijnenComponent } from './medicijnen/medicijnen.component';
import { GenererenComponent } from './genereren/genereren.component';
import { PatientComponent } from './patient/patient.component';
import { VertrouwenspersonenComponent } from './vertrouwenspersonen/vertrouwenspersonen.component';
import { NieuwpatientComponent } from './nieuwpatient/nieuwpatient.component';
import { PersonResolverService } from './_services/person-resolver.service';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent },
  {path: 'gegevens', component: GegevensComponent},
  {path: 'gegevens/nieuw', component: NieuwpatientComponent},
  {path: 'gegevens/:id', component: PatientComponent, resolve: {cres: PersonResolverService}},
  {path: 'medicijnen/:id', component: MedicijnenComponent},
  {path: 'genereren/:id', component: GenererenComponent, resolve: {cres: PersonResolverService}},
  {path: 'vertrouwenspersonen/:id', component: VertrouwenspersonenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [PersonResolverService]
})
export class AppRoutingModule { }
