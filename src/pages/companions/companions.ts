import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CompanionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-companions',
  templateUrl: 'companions.html',
})
export class CompanionsPage {
  
  companionsList = [1,2,3]
  companionPics = ['CompanionOne.gif','CompanionTwo.gif', 'CompanionThree.gif']
  companionNames = ['Dave Buster', 'Dave', 'Buster']

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanionsPage');
  }

}
