import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { ConfirmPopPage } from '../confirm-pop/confirm-pop';
import { QuestPage } from '../quest/quest';

import { Quest } from '../../models/quest';

import { questsService } from './../../services/quests/quests.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  data = {
    confirmMessage: "Do You Want To Take Responsibility For This Shit!?"
  }
  taskList = [1, 2, 3, 4]
  dailyTaskList = [1, 2]
  pushPage: any;

  questContent:any;

  questList$: Observable<Quest[]>;

  constructor(private quest: questsService, db: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams,
    public popoverCtrl: PopoverController) {
      this.questContent = navParams.get('content');
      console.log(this.questContent);
      this.pushPage = QuestPage

      this.questList$ = this.quest
      .getQuest() //DB List
      .snapshotChanges()//key AND value pairs
      .map(changes => {
          console.log(changes);
          return changes.map(c => ({
            key: c.payload.key,
            ...c.payload.val(),
          }));
        });
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(ConfirmPopPage, this.data);
    popover.present({
      ev: myEvent
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }



}
