import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';

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

  private queries:any = [];


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private httpClient: HttpClient
  ) {
    
  }

  ionViewDidLoad(){
    this.getQueries();
  }

  getQueries(){
    this.httpClient.get('http://localhost:3000/api/store').subscribe((res)=>{
      this.queries = res;
    });
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

