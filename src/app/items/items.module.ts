import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemFormComponent } from './item-form/item-form.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemsHomeComponent } from './items-home/items-home.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ ItemFormComponent, ItemListComponent, ItemsHomeComponent ],
  imports: [
    SharedModule,
    CommonModule,
    ItemsRoutingModule,
    FormsModule,
  ],
})
export class ItemsModule {
}
