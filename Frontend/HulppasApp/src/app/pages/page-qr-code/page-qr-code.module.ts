import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PageQrCodePage } from './page-qr-code.page';

const routes: Routes = [
  {
    path: '',
    component: PageQrCodePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PageQrCodePage]
})
export class PageQrCodePageModule {}
