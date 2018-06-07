import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

import { QueryService } from '../../services/queries.service';
import { QueryValidator } from '../../validators/query';

@Component({
  selector: 'page-new',
  templateUrl: 'new.html'
})
export class NewPage {
  private url = "http://localhost:3000/api/queries";
  queriesForm: FormGroup;

  //for dynamic param
  public anArray:any=[];

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) {
    this.queriesForm = this.formBuilder.group({
      name: [''],
      version: [''],
      description: [''],
      query: ['', Validators.compose([
          /*Validators.pattern(regexValidators.email),*/ ///reqex //import { regexValidators } from '../validators/validator';
          QueryValidator.checkQuery,
          Validators.required
        ])
      ],
      key: [],
      value: [],
      media: ['']
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

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: `Are you sure you want to publish this query?`,
      message: ``,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            let controls = this.queriesForm.controls;
            
            var params;
            let keys = this.queriesForm.get['key'];
            let values = this.queriesForm.get['value'];
            for(let i =0; i < keys.length; i++){
              params[keys[i]] = values[i];
            }
            console.log(params)
            this.logForm(new QueryService(
              controls['name'].value,
              controls['version'].value,
              controls['description'].value,
              controls['query'].value,
              params,
              controls['media'].value
            ));
              //this.queriesForm.reset();
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

  add(){
    this.anArray.push(1);
  }
}