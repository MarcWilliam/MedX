import { Component, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Chart } from 'chart.js';

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  @ViewChildren('lineCanvas') linesCanvas: QueryList<ElementRef>;
  lineChart: any;

  private queries: any = [];

  constructor(public navCtrl: NavController) {

  }


  ionViewDidLoad() {
    this.show();
  }

  show() {
    for (let i in this.linesCanvas.toArray()/*.reverse()*/) {
      this.lineChart = new Chart(this.linesCanvas.toArray()[i].nativeElement, {
        type: 'line',
        data: {
          labels: [2003, 2004, 2005, 2006, 2007],
          datasets: [{
            label: 'Spendeng on drug development',
            data: this.queries[i].result,
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
                beginAtZero: true
              }
            }]
          }
        }
      });
    }

  }

}
