import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestPage } from './quest';

@NgModule({
  declarations: [
    QuestPage,
  ],
  imports: [
    IonicPageModule.forChild(QuestPage),
  ],
})
export class QuestPageModule {}
