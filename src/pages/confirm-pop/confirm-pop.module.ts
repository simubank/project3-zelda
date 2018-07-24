import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmPopPage } from './confirm-pop';

@NgModule({
  declarations: [
    ConfirmPopPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmPopPage),
  ],
  exports: [
    ConfirmPopPage
  ]
})
export class ConfirmPopPageModule {}
