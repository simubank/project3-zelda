import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';

import { questsService } from './../../services/quests/quests.service';
import { Quest } from '../../models/quest';
import { DashboardPage } from '../dashboard/dashboard'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

/**
 * Generated class for the QuestchoicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-questchoice',
  templateUrl: 'questchoice.html',
})
export class QuestchoicePage {

  questChoice$: Observable<Quest[]>;

  questionKey:any;

  constructor(private quest: questsService, db: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams) {
    this.questionKey = navParams.get('key');
    console.log(this.questionKey);
    this.questChoice$ = this.quest
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

  questClick(event, content){
    /*this.navCtrl.push(QuestchoicePage,{
    key:key
  });*/
    this.navCtrl.setRoot(DashboardPage,{
      content:content
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestchoicePage');
  }

}
