import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
   { path: '', loadChildren: './pages/page-qr-code/page-qr-code.module#PageQrCodePageModule' },
   { path: 'page-info', loadChildren: './pages/page-info/page-info.module#PageInfoPageModule' },
   { path: 'page-login', loadChildren: './pages/page-login/page-login.module#PageLoginPageModule' },
   //{ path: 'page-contact', loadChildren: './tabs/tabs.module#TabsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
