import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { QuestchoicePage } from '../questchoice/questchoice'

import { questionsService } from './../../services/questions/questions.service';

import { AngularFireDatabase } from 'angularfire2/database';
import { Question } from '../../models/question';

/**
 * Generated class for the QuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {

  questionSetup$: Observable<Question[]>;

  constructor(private question: questionsService, db: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams) {
      this.questionSetup$ = this.question
      .getQuestion() //DB List
      .snapshotChanges()//key AND value pairs
      .map(changes => {
          console.log(changes);
          return changes.map(c => ({
            key: c.payload.key,
            ...c.payload.val(),
          }));
        });
  }

  questionClick(event, key){
    this.navCtrl.setRoot(QuestchoicePage,{
    key:key
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
  }

}
