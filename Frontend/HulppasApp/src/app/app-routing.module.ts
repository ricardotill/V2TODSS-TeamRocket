import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
   { path: '', loadChildren: './pages/page-qr-code/page-qr-code.module#PageQrCodePageModule' },
   { path: 'page-info', loadChildren: './pages/page-info/page-info.module#PageInfoPageModule' },
   { path: 'page-info/:hash', loadChildren: './pages/page-info/page-info.module#PageInfoPageModule' },
   { path: 'page-login', loadChildren: './pages/page-login/page-login.module#PageLoginPageModule' },
   { path: 'page-qr-code', loadChildren: './pages/page-qr-code/page-qr-code.module#PageQrCodePageModule' },
  { path: 'page-scan', loadChildren: './pages/page-scan/page-scan.module#PageScanPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
