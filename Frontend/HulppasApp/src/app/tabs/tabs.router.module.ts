import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'pages',
    component: TabsPage,
    children: [
      {
        path: 'page-info',
        children: [
          {
            path: '',
            loadChildren: '../pages/page-info/page-info.module#PageInfoPageModule'
          }
        ]
      },
      {
        path: 'page-contact',
        children: [
          {
            path: '',
            loadChildren: '../pages/page-contact/page-contact.module#PageContactPageModule'
          }
        ]
      },
      {
        path: 'page-medicatie',
        children: [
          {
            path: '',
            loadChildren: '../pages/page-medicatie/page-medicatie.module#PageMedicatiePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: 'pages/page-qr-code',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'pages/page-qr-code',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
