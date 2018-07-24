import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'
import { FirebaseListObservable } from 'angularfire2/database-deprecated'
import { AngularFireAuth } from 'angularfire2/auth';
import { Quest } from './../../models/quest';

@Injectable()

export class questsService {

    quest: FirebaseListObservable<Quest[]> = null;
    userId: string;

  private questRef = this.db.list<Quest>('quest');

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth){
    this.afAuth.authState.subscribe(user => {
      if(user) this.userId = user.uid
    })
  }

    getQuest(){
      return this.questRef;
    }
    /*
    getProfileNow(): FirebaseListObservable<Profile[]>{
      if (!this.userId) return;
      this.profile = this.db.list(`profile/${this.userId}`);
      return this.profile
    }*/

    addQuest(quest: Quest){
      return this.questRef.push(quest);
    }
}
