import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Profile } from '../../models/profile';
import { SetupPage } from '../setup/setup';
import { QuestionPage } from '../question/question';

import { profileSetupService } from './../../services/profile-setup/profile-setup.service';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profile: Profile = {
    uid: '',
    customerPin: '',
    userName: '',
    firstName: '',
    lastName: '',
    healthPoints: 50,
    mana: 50,
    gold: 0
  }

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase, private profileSetup: profileSetupService,
    public navCtrl: NavController, public navParams: NavParams) {
  }
  /*
  createProfile(profile: Profile){
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afDatabase.object(`profile/${auth.uid}`).addProfile(this.profile).then(() => this.navCtrl.setRoot('SetupPage'));
    })
  }


   => this.navCtrl.setRoot('SetupPage')
  */
  createProfile(profile: Profile){
    this.afAuth.authState.take(1).subscribe(auth => {
      this.profile.uid = auth.uid;
        this.profileSetup.addProfile(this.profile).then(ref => {
          this.navCtrl.setRoot(QuestionPage,{key: ref.key})
        });
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
