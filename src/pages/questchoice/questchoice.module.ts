import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestchoicePage } from './questchoice';

@NgModule({
  declarations: [
    QuestchoicePage,
  ],
  imports: [
    IonicPageModule.forChild(QuestchoicePage),
  ],
})
export class QuestchoicePageModule {}
