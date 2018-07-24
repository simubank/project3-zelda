import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ConfirmPopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirm-pop',
  templateUrl: 'confirm-pop.html',
})
export class ConfirmPopPage {
  message: string;
  data: any;
  index: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.index = this.navParams.get('index')
    this.message = this.navParams.get(this.index)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmPopPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
