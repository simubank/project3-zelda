import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { profileSetupService } from './../../services/profile-setup/profile-setup.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { AngularFireDatabase } from 'angularfire2/database';
import { Profile } from '../../models/profile';
/**
 * Generated class for the SetupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setup',
  templateUrl: 'setup.html',
})
export class SetupPage {

  profileSetup$: Observable<Profile[]>;

  constructor(private profile: profileSetupService, db: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams) {
      this.profileSetup$ = this.profile
      .getProfile() //DB List
      .snapshotChanges()//key AND value pairs
      .map(changes => {
          console.log(changes);
          return changes.map(c => ({
            key: c.payload.key,
            ...c.payload.val(),
          }));
        });

        //this.profileSetup$ = this.profile.getProfile();
        //this.profileSetup$ = db.list('/profile').valueChanges().subscribe((datas) => {
        //console.log("datas", datas) },(err)=>{ console.log("probleme : ", err) });
        //console.log(this.profileSetup$);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetupPage');
  }

}
