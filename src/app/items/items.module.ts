import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemFormComponent } from './item-form/item-form.component';
import { ItemListComponent } from './item-list/item-list.component';


@NgModule({
  declarations: [ItemFormComponent, ItemListComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule
  ]
})
export class ItemsModule { }
