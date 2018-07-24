import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { ConfirmPopPage } from '../confirm-pop/confirm-pop';

/**
 * Generated class for the TdExperiencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-td-experience',
  templateUrl: 'td-experience.html',
})
export class TdExperiencePage {
  data = {
    jazz:"Delivering the sounds of the world’s greatest jazz musicians from the most intimate of venues to large concert halls, the TD Toronto Jazz Festival should be part of your summer calendar.",
    gorillaz:"Watch the Gorillaz as they embark on a quest to prove that they are infact Humanz and not Gorillaz",
    cb:"Earn 6% on all purchases for the first 3 months2 up to a total spend of $3,500. Plus, get a full Annual Fee Rebate1 for the Primary Cardholder for the first year.",
    pt:"Get up to 20,000 TD Rewards Points1. Plus, get a full Annual Fee Rebate1 for the Primary Cardholder for the first year.",
    ploc:"A Personal Line of Credit can help you pay off your other debts with flexible payments and competitive interest rates while providing ongoing access to available credit for future use.",
    sloc:"Enjoy low student interest rates, with interest ‑ only monthly payments required while in school and for 24 months after you leave school. And then what?",
    points:'Exchange game currency for +50 TD Rewards Points',
    apoints: 'Exchange game currency for +50 TD Aeroplan Points',
    index: ''
  }
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public popoverCtrl: PopoverController) {
  }

  presentPopover(myEvent, index) {
    this.data.index = index;
    let popover = this.popoverCtrl.create(ConfirmPopPage, this.data, {cssClass: 'contact-popover'});
    popover.present({
      ev: myEvent
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TdExperiencePage');
  }

}
