import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { ConfirmPopPage } from '../confirm-pop/confirm-pop';

/**
 * Generated class for the StorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-store',
  templateUrl: 'store.html',
})
export class StorePage {
  data = {
    confirmMessage: "You Better Know You're Spending Some Good Cash on this Fucin Merch",
    index: ''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public popoverCtrl: PopoverController) {
  }

  presentPopover(myEvent) {
    this.data.index = 'confirmMessage';
    let popover = this.popoverCtrl.create(ConfirmPopPage, this.data);
    popover.present({
      ev: myEvent
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StorePage');
  }

}
