import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';

import { Query } from './../services/queries.service';

@Component({
  selector: 'page-new',
  templateUrl: 'new.html'
})
export class NewPage {

  private url = "http://localhost:3000/api/queries";

  private statisticsPage: any;

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    private httpClient: HttpClient
  ) {  }

  logForm(query) {
    this.httpClient.post(this.url, query)
    .subscribe(
      res => {
        this.okToast();
      },
      error => {
        this.rejectToast();
        console.log(error);
      }
    );

  }

  okToast() {
    let toast = this.toastCtrl.create({
        message: 'Query added successfully',
        duration: 3000,
        position: 'bottom'
    });
    toast.present();
  }

  rejectToast() {
    let toast = this.toastCtrl.create({
        message: 'Rejected',
        duration: 3000,
        position: 'bottom'
    });
    toast.present();
}

  showConfirm() {

    //input validation
    var query = new Query("",0);

    let confirm = this.alertCtrl.create({
      title: `Are you sure you want to publish this query?`,
      message: ``,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.logForm(query);
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
