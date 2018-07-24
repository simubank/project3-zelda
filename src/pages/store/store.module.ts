import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StorePage } from './store';
import { ConfirmPopPage } from '../confirm-pop/confirm-pop';

@NgModule({
  declarations: [
    StorePage,
    ConfirmPopPage
  ],
  imports: [
    IonicPageModule.forChild(StorePage),
  ],
})
export class StorePageModule {}
