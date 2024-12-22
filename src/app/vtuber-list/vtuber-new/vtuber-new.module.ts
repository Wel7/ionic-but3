import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VtuberNewPageRoutingModule } from './vtuber-new-routing.module';

import { VtuberNewPage } from './vtuber-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VtuberNewPageRoutingModule
  ],
  declarations: [VtuberNewPage]
})
export class VtuberNewPageModule {}
