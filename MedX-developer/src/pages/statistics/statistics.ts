import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Chart } from 'chart.js';
import { Query } from './../home/query';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let queries = navParams.data;

    this.obj = queries.pop();
    for(let i = 0; i < 5; i ++){ //from db
      this.obj.result.push(Math.floor(Math.random() * 100) + 0  );
    }
    queries.push(this.obj);

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

}
