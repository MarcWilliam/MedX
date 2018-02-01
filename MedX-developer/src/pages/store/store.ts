import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Item } from './item';

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

  public static items:Item[] = new Array();

  arr:Item[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.arr = StorePage.items;
  }

  ionViewDidLoad(){

  }

  public static add(data:string, cost:number){
    StorePage.items.push(new Item(data, cost, "person"));
  }

  public static get(){
    console.log(StorePage.items.slice(-1).pop().query);
  }

  buy(){
    console.log("You bought this query");
  }

  showConfirm(item:Item) {

    let confirm = this.alertCtrl.create({
      title: `Buy this query?`,
      message: `This service will cost you <span calss="costText">${item.cost} LE</span>`,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('OK clicked');
            this.buy();
          }
        },
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    confirm.present();
  }

}

