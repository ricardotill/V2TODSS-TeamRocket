import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { HomepageComponent } from './homepage/homepage.component';
import { GegevensComponent } from './gegevens/gegevens.component';
import { MedicijnenComponent } from './medicijnen/medicijnen.component';
import { GenererenComponent } from './genereren/genereren.component';
import { PatientComponent } from './patient/patient.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent },
  {path: 'gegevens', component: GegevensComponent},
  {path: 'gegevens/:id', component: PatientComponent},
  {path: 'medicijnen/:id', component: MedicijnenComponent},
  {path: 'genereren/:id', component: GenererenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
