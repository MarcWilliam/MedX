import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';

import { Chart } from 'chart.js';
import { Query } from '../home/query';
import { HistoryPage } from '../history/history';

import { StorePage } from '../store/store';

/**
 * Generated class for the StatisticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html',
})
export class StatisticsPage {

  @ViewChild('lineCanvas') lineCanvas;
  lineChart: any;  

  obj:Query;

  isAdded:boolean;
  
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

    this.obj = HistoryPage.queries.pop();
    for(let i = 0; i < 5; i ++){ //from db
      this.obj.result.push(Math.floor(Math.random() * 100) + 0  );
    }
    HistoryPage.queries.push(this.obj);
    this.isAdded = false;
  }

  ionViewDidLoad() {
 
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {

        type: 'line',
        data: {
            labels: [2003, 2004, 2005, 2006, 2007],
            datasets: [{
                label: 'Spendeng on drug development',
                data: this.obj.result,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
  }


  showConfirm(){
    let confirm = this.alertCtrl.create({
        title: 'Add this query?',
        message: 'Are you sure you want to add this query to the market?',
        buttons: [
          {
            text: 'Ok',
            handler: () => {
                console.log('OK clicked');
                if(!this.isAdded)
                {
                    StorePage.add(this.obj.query, this.obj.cost);
                    console.log(StorePage.get());
                }
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
