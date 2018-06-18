import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Chart } from 'chart.js';
/**
 * Generated class for the SummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-summary',
  templateUrl: 'summary.html',
})
export class SummaryPage {


  @ViewChild('lineCanvas') lineCanvas;
  lineChart: any;

  data: Array<{ title: string, details: string, icon: string, showDetails: boolean }> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, ) {
    this.data.push({
      title: "Blood Pressure",
      details: '',
      icon: 'ios-add-circle-outline',
      showDetails: false
    });
  }



  ionViewDidLoad() {

    var tempSys: number[] = [110, 114, 109, 108, 120];
    var tempDia: number[] = [76, 74, 79, 75, 80];
    var tempDate: string[] = ['2016-01-02', '2016-01-09', '2016-01-15', '2016-01-26', '2016-02-02'];

    if (this.lineCanvas) {
      this.lineChart = new Chart(this.lineCanvas.nativeElement, {

        type: 'line',
        data: {
          labels: tempDate,
          datasets: [
            {
              label: 'Systolic blood pressure',
              data: tempSys,
              backgroundColor: [
                'rgba(0, 0, 0, 0)'
              ],
              borderColor: [
                'rgba(255,99,132,1)'
              ],
              borderWidth: 2
            },
            {
              label: 'Diastolic blood pressure',
              data: tempDia,
              backgroundColor: [
                'rgba(0, 0, 0, 0)'
              ],
              borderColor: [
                'rgba(132,99,255,1)'
              ],
              borderWidth: 2
            }
          ]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: false
              }
            }]
          }
        }

      });
    }
  }

  addPoint(label, data, data2) {
    this.lineChart.data.labels.push(label);
    this.lineChart.data.datasets[0].data.push(data);
    this.lineChart.data.datasets[1].data.push(data2);
    this.lineChart.update(0);
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Add record',
      message: "",
      inputs: [
        {
          name: 'date',
          type: 'date'
        },
        {
          name: 'systolic',
          type: 'number',
          placeholder: 'Systolic'
        },
        {
          name: 'diaystolic',
          type: 'number',
          placeholder: 'Diaystolic'
        }

      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Ok',
          handler: data => {
            this.addPoint(data.date, data.systolic, data.diaystolic);
          }
        }
      ]
    });
    prompt.present();
  }




  toggleDetails(data) {
    if (data.showDetails) {
      data.showDetails = false;
      data.icon = 'ios-add-circle-outline';
    } else {
      data.showDetails = true;
      data.icon = 'ios-remove-circle-outline';
    }
  }

}


