import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'
import { FirebaseListObservable } from 'angularfire2/database-deprecated'
import { AngularFireAuth } from 'angularfire2/auth';
import { Question } from './../../models/question';

@Injectable()

export class questionsService {

    question: FirebaseListObservable<Question[]> = null;
    userId: string;

  private questionRef = this.db.list<Question>('question');

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth){
    this.afAuth.authState.subscribe(user => {
      if(user) this.userId = user.uid
    })
  }

    getQuestion(){
      return this.questionRef;
    }
    /*
    getProfileNow(): FirebaseListObservable<Profile[]>{
      if (!this.userId) return;
      this.profile = this.db.list(`profile/${this.userId}`);
      return this.profile
    }*/

    addQuest(question: Question){
      return this.questionRef.push(question);
    }
}
