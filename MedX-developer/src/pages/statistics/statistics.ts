import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, AlertController, ToastController } from 'ionic-angular';

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

    obj: Query;

    isAdded: boolean;

    constructor(public navCtrl: NavController, public alertCtrl: AlertController, public toastCtrl: ToastController) {

        this.obj = HistoryPage.queries.pop();
        for (let i = 0; i < 5; i++) { //from db
            this.obj.result.push(Math.floor(Math.random() * 100) + 0);
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
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }


    showPrompt() {
        let prompt = this.alertCtrl.create({
            title: 'Sell this query?',
            message: "Enter a price for this query to sell it in the store:",
            inputs: [
                {
                    name: 'price',
                    placeholder: 'Price'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => { }
                },
                {
                    text: 'Ok',
                    handler: data => {
                        if (!this.isAdded) {
                            if (data.price <= (this.obj.cost * 10)) {
                                StorePage.add(this.obj.query, data.price);
                                this.okToast();
                                this.isAdded = true;
                            }
                            else {
                                this.rejectToast();
                            }
                        }

                    }
                }
            ]
        });
        prompt.present();
    }

    rejectToast() {
        let toast = this.toastCtrl.create({
            message: 'The price you entered is too high',
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    }
    okToast() {
        let toast = this.toastCtrl.create({
            message: 'The query is added to the store',
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    }
}
