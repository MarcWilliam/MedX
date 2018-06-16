import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController, App } from 'ionic-angular';
import { FormControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import { StatisticsPage } from '../statistics/statistics';


@Component({
  selector: 'page-execute-form',
  templateUrl: 'execute-form.html',
})
export class ExecuteFormPage {
  private paramsForm: FormGroup;
  private query: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public viewCtrl: ViewController,
    public appCtrl: App,
    private formBuilder: FormBuilder
  ) {
    this.query = this.navParams.get("query");
  }

  ngOnInit() {
    this.paramsForm = this.formBuilder.group({
      params: this.formBuilder.array([])
    });

    for (var key in this.query.params){
      if(this.query.params.hasOwnProperty){
        this.addParam(key, '');
      }
    }
  }

  createParam(key = '', value = ''): FormGroup {
    return this.formBuilder.group({
      key: key,
      value: value
    });
  }

  addParam(key = '', value = '') {
    let params = this.paramsForm.get('params') as FormArray;
    params.push(this.createParam(key, value));
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  execute(query) {
    let confirm = this.alertCtrl.create({
      title: `Execute this query?`,
      message: `This service will cost you ${this.query.cost} LE`,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('OK clicked');
            this.appCtrl.getRootNav().push(StatisticsPage, { query: this.query });
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
