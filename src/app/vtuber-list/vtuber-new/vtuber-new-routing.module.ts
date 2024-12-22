import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VtuberNewPage } from './vtuber-new.page';

const routes: Routes = [
  {
    path: '',
    component: VtuberNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VtuberNewPageRoutingModule {}
