import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'
import { FirebaseListObservable } from 'angularfire2/database-deprecated'
import { AngularFireAuth } from 'angularfire2/auth';
import { Profile } from './../../models/profile';

@Injectable()

export class profileSetupService {

    profile: FirebaseListObservable<Profile[]> = null;
    userId: string;

  private profileRef = this.db.list<Profile>('profile');

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth){
    this.afAuth.authState.subscribe(user => {
      if(user) this.userId = user.uid
    })
  }

    getProfile(){
      return this.profileRef;
    }
    /*
    getProfileNow(): FirebaseListObservable<Profile[]>{
      if (!this.userId) return;
      this.profile = this.db.list(`profile/${this.userId}`);
      return this.profile
    }*/

    addProfile(profile: Profile){
      return this.profileRef.push(profile);
    }
}
