import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';

import { StatisticsPage } from '../statistics/statistics';
import { QueryService } from '../../services/queries.service';
import { EditQueryPage } from '../edit-query/edit-query';

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
  private from: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public viewCtrl: ViewController
  ) {
    this.query = this.navParams.get("query");
    this.from = this.navParams.get("from") == 0 ? "Execute" : "Edit";
    console.log(this.query.media.main);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QueryModalPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


  execute(query) {
    this.navCtrl.push(StatisticsPage, { query: query });
  }

  showConfirm(query) {
    if (this.from === "Execute") {
      let confirm = this.alertCtrl.create({
        title: `Execute this query?`,
        message: `This service will cost you ${query.cost} LE`,
        buttons: [
          {
            text: 'Ok',
            handler: () => {
              console.log('OK clicked');
              this.execute(query);
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
    else {
      this.navCtrl.push(EditQueryPage, { query: query });
    }
  }

}
