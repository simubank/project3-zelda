import { NgModule } from '@angular/core';
import { IonicPageModule, Header } from 'ionic-angular';
import { CompanionsPage } from './companions';
import { HeaderPage } from '../header/header';

@NgModule({
  declarations: [
    CompanionsPage,
    HeaderPage
  ],
  imports: [
    IonicPageModule.forChild(CompanionsPage),
    HeaderPage
  ],
})
export class CompanionsPageModule {}
