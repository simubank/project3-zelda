import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Profile } from '../../models/profile';
import { ProfilePage } from '../profile/profile'
import { DashboardPage } from '../dashboard/dashboard'
import { SetupPage } from '../setup/setup'
//import { Observable } from 'rxjs/Observable'

import { profileSetupService } from './../../services/profile-setup/profile-setup.service';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;
  //profileData: Observable<any>

  constructor(private afAuth: AngularFireAuth, private profileSetup: profileSetupService, private afDatabase: AngularFireDatabase,
     public navCtrl: NavController, public navParams: NavParams) {
  }


  async signIn(user: User) {
    try{
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      console.log(result);
      /*this.afAuth.authState.take(1).subscribe(data => {
        console.log(data.uid);
        this.profileData = this.afDatabase.object(`/profile/${data.uid}`).valueChanges(),map();
        console.log(this.profileData);
        console.log(this.profileData.firstname);
        if (this.profileData.firstName != null){
          this.navCtrl.setRoot('SetupPage');
        }
      });*/
      if (result){
        this.navCtrl.setRoot('ProfilePage');
      }
    }
    catch(e){
      console.error(e);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
