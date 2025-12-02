import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../pages/home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('../pages/products/products.module').then(
            (m) => m.ProductsPageModule
          ),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('../pages/about/about.module').then((m) => m.AboutPageModule),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('../pages/contact/contact.module').then(
            (m) => m.ContactPageModule
          ),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
