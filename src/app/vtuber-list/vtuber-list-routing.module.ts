import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VtuberListPage } from './vtuber-list.page';

const routes: Routes = [
  {
    path: '',
    component: VtuberListPage,
  },
  {
    path: 'new',
    loadChildren: () =>
      import('./vtuber-new/vtuber-new.module').then(
        (m) => m.VtuberNewPageModule
      ),
  },
  {
    path: 'quick-add',
    loadChildren: () =>
      import('./vtuber-quick-add/vtuber-quick-add.module').then(
        (m) => m.VtuberQuickAddPageModule
      ),
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./vtuber/vtuber.module').then((m) => m.VtuberPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VtuberListPageRoutingModule {}
