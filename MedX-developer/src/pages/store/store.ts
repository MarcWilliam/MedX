import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { StatisticsPage } from '../statistics/statistics';

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
  private url = "http://localhost:8064/api/queries";
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
    this.httpClient.get(this.url).subscribe((res)=>{
      this.queries = res;
    });
  }

  execute(item){
    this.navCtrl.push(StatisticsPage, {query: item});
  }

  showConfirm(item) {

    let confirm = this.alertCtrl.create({
      title: `Execute this query?`,
      message: `This service will cost you ${item.cost} LE`,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('OK clicked');
            this.execute(item);
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

