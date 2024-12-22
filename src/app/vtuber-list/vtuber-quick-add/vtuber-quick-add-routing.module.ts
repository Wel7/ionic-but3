import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VtuberQuickAddPage } from './vtuber-quick-add.page';

const routes: Routes = [
  {
    path: '',
    component: VtuberQuickAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VtuberQuickAddPageRoutingModule {}
