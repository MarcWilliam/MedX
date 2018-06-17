import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {HistoryPage} from '../history/history';

/**
 * Generated class for the PrescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prescription',
  templateUrl: 'prescription.html',
})
export class PrescriptionPage {
  public form = {
    medicine : "",
    testsCount : 0,
    tests : [],
    scansCount : 0,
    scans :[]
  }
public testsInput= [];
public scansInput= [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.form.tests.length);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrescriptionPage');
  }


  expand(type : string){
    if(type =="test"){
      if(this.form.testsCount>=0){
        this.form.tests.length = this.form.testsCount;
        this.testsInput.length=this.form.testsCount;
        
    }
  }else{
    if(this.form.scansCount >=0 ){
      this.form.scans.length = this.form.scansCount;
      this.scansInput.length=this.form.scansCount;
   
  }
   
    }
    //console.log(this.form);
  }

  submit(){
    this.form.scans=this.scansInput;
    this.form.tests=this.testsInput;
    alert("prescription Created");
    this.navCtrl.setRoot(HistoryPage);
  }

}
