import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Query } from '../../services/queries.service';
import { QueryValidator } from '../../validators/query';

@Component({
  selector: 'page-new',
  templateUrl: 'new.html'
})
export class NewPage {

  private url = "http://localhost:3000/api/queries";

  credentialsForm: FormGroup;

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) {
    this.credentialsForm = this.formBuilder.group({
      name: [''],
      version: [''],
      description: [''],
      query: ['', Validators.compose([
          /*Validators.pattern(regexValidators.email),*/ ///reqex //import { regexValidators } from '../validators/validator';
          QueryValidator.checkQuery,
          Validators.required
        ])
      ],
      cost: ['']
    });
  }

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

    let confirm = this.alertCtrl.create({
      title: `Are you sure you want to publish this query?`,
      message: ``,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.logForm(new Query(
              this.credentialsForm.controls['name'].value,
              this.credentialsForm.controls['version'].value,
              this.credentialsForm.controls['description'].value,
              this.credentialsForm.controls['query'].value, 0));
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
