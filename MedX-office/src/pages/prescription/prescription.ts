import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//import {HistoryPage} from '../history/history';

/**
 * Generated class for the PrescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var require: any;
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

public medicationTemplate : any;
public medications={ count : 0 , meds : []  , expand : false};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.form.tests.length);
    this.medications = { count:0 , meds: new Array() , expand : false};
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrescriptionPage');
  }


  expand(id,index){
    if(id ==0){
      this.medications.meds[index].expand=!this.medications.meds[index].expand;
    }



    /*
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
    */
  }

  addElement(type){
    if(type==0){
       
         this.medications.count++
        let temp = {json : require('../../json-templates/medicationRequest.json') , expand : true }
         this.medications.meds.push(JSON.parse(JSON.stringify(temp)));
         this.medications.expand=true;
       console.log(this.medications.meds);
       


     

    }else if(type ==1){
     // this.testsInput =number;

    }else if(type==2){
     // this.scansInput = number;
    }
  }

  submit(){
   // this.form.scans=this.scansInput;
    //this.form.tests=this.testsInput;
   // alert("prescription Created");
    //this.navCtrl.setRoot(HistoryPage);
    console.log(this.medications.meds)
  }

}
