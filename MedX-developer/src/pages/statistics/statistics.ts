import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Chart } from 'chart.js';

import { QueryService } from '../../services/queries.service';
import { StorePage } from '../store/store';

@IonicPage()
@Component({
    selector: 'page-statistics',
    templateUrl: 'statistics.html',
})
export class StatisticsPage {

    @ViewChild('lineCanvas') lineCanvas;
    lineChart: any;

    private url = "http://localhost:8064/api/store";
    obj: QueryService;
    isAdded: boolean;

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public alertCtrl: AlertController,
        public toastCtrl: ToastController,
        private httpClient: HttpClient
    ) {

        this.obj = navParams.get("query");
        this.isAdded = false;
    }

    calculateResult(){
        for (let i = 0; i < 5; i++) { //from db
            this.obj.result.push(Math.floor(Math.random() * 100) + 0);
        }
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
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
}
