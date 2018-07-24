import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardPage } from './dashboard';
import { HeaderPage } from '../header/header';

@NgModule({
  declarations: [
    DashboardPage,
    HeaderPage
  ],
  imports: [
    IonicPageModule.forChild(DashboardPage),
    HeaderPage
  ],
})
export class DashboardPageModule {}
