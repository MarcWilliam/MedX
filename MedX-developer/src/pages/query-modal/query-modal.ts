import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';

import { StatisticsPage } from '../statistics/statistics';
import { QueryService } from '../../services/queries.service';

/**
 * Generated class for the QueryModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-query-modal',
  templateUrl: 'query-modal.html',
})
export class QueryModalPage {

  private query: QueryService;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public viewCtrl: ViewController
  ) {
    this.query = this.navParams.get("query");
    console.log(this.query.media.main);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QueryModalPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
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
