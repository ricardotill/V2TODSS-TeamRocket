import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HTTP } from '@ionic-native/http/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ModuleMedicatieModule } from './modules/module-medicatie/module-medicatie.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(), 
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    ModuleMedicatieModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    // QRScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HTTP,
    BarcodeScanner
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
