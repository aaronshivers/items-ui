import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { ItemsHomeComponent } from './items-home/items-home.component';


const itemsRoutes: Routes = [
  { path: '', component: ItemsHomeComponent, canActivate: [ AuthGuard ] },
];

@NgModule({
  imports: [ RouterModule.forChild(itemsRoutes) ],
  exports: [ RouterModule ],
})
export class ItemsRoutingModule {
}
