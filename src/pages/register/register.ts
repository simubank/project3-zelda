import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomerProvider } from './../../providers/customer/customer';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user';

import { LoginPage } from '../login/login';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public customers = []
  user = {} as User;

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, private customerProvider: CustomerProvider, public storage: Storage) {
  }

  ngOnInit() {
  }


  async register(user: User){
    try{
          const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
          console.log(result);
          this.navCtrl.push(LoginPage);
    }
    catch (e) {
      console.error(e);
    }

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
