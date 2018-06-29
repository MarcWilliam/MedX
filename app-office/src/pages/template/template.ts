import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { testForms } from '../../interfaces/test-form';

import { ToastController } from 'ionic-angular';
import {HistoryPage} from '../history/history'; 


/**
 * Generated class for the TemplatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-template',
  templateUrl: 'template.html',
})
export class TemplatePage {
  public form = {
    WBC: 0 ,
    RBC: 0 ,
    hemoglobin: 0,
    hematocrit: 0,
    MCV: 0,
    MCH: 0,
    MCHC: 0,
    RDW: 0,
    PC: 0,
    MPV: 0
  }
  public test :testForms  ;

  public submitted = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl : ToastController) {
    this.test = this.navParams.get('Test');
    
    console.log(this.test);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TemplatePage');
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Test Comleted',
      duration: 2000,
      position: 'middle'
    });

    toast.onDidDismiss(() => {
      this.navCtrl.setRoot(HistoryPage);
    });
  
    toast.present();
  }


  submitRequest(requestForm: NgForm){
    this.submitted = true;
    if(requestForm.valid){
      console.log(JSON.stringify(this.test));
     this.presentToast();
        
    }
    
  }

}
