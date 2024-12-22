import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VtuberListPageRoutingModule } from './vtuber-list-routing.module';

import { VtuberListPage } from './vtuber-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VtuberListPageRoutingModule
  ],
  declarations: [VtuberListPage]
})
export class VtuberListPageModule {}
