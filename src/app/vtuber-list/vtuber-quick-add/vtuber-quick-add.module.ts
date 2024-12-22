import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VtuberQuickAddPageRoutingModule } from './vtuber-quick-add-routing.module';

import { VtuberQuickAddPage } from './vtuber-quick-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VtuberQuickAddPageRoutingModule
  ],
  declarations: [VtuberQuickAddPage]
})
export class VtuberQuickAddPageModule {}
