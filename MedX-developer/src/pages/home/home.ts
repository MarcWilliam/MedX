import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';

import { StatisticsPage } from '../statistics/statistics';
import { HistoryPage } from '../history/history';
import { Query } from './query';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private query: string;
  private queryCost: number;

  private statisticsPage: any;

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    private httpClient: HttpClient
  ) {

    this.statisticsPage = StatisticsPage;
  }

  logForm() {
    var query = new Query(this.query, this.queryCost);
    this.httpClient.post('http://localhost:3000/api/queries', query)
    .subscribe(
      data => {
        alert('ok');
      },
      error => {
        console.log(error);
      }
    );
    
    this.navCtrl.push(this.statisticsPage, {query: query});
    this.query = '';
  }


  showConfirm() {

    if (this.query === undefined || this.query.length === 0) {
      return;
    }
    else if (this.query.length < 20) {
      this.queryCost = 20;
    } else if (this.query.length > 20) {
      this.queryCost = 50;
    }

    let confirm = this.alertCtrl.create({
      title: `Are you sure you want to execute this query?`,
      message: `This service will cost you <span calss="costText">${this.queryCost} LE</span>`,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.logForm();
          }
        },
        {
          text: 'Cancel',
          handler: () => {}
        }
      ]
    });
    confirm.present();
  }

}
