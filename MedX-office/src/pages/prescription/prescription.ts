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
    medicine: "",
    testsCount: 0,
    tests: [],
    scansCount: 0,
    scans: []
  }
  public testsInput = [];
  public scansInput = [];

  public procedures = { proc: [] };

  public medicationTemplate: any;
  public medications = { meds: [] };

  public test = { tests: [] };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.form.tests.length);
    this.medications = { meds: new Array() };
    this.procedures = { proc: new Array() };
    this.test = { tests: new Array() };

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrescriptionPage');
  }


  expand(id, index) {
    if (id == 0) {
      this.medications.meds[index].expand = !this.medications.meds[index].expand;
    } else if (id == 1) {
      this.procedures.proc[index].expand = !this.procedures.proc[index].expand;
    } else if (id ==2) {
      this.test.tests[index].expand = !this.test.tests[index].expand;
    }
  }

  addElement(type) {
    if (type == 0) {

      let temp = { json: require('../../json-templates/medicationRequest.json'), expand: true }
      this.medications.meds.push(JSON.parse(JSON.stringify(temp)));

    } else if (type == 1) {
      let temp = { json: require('../../json-templates/procedureRequest.json'), expand: true }
      this.procedures.proc.push(JSON.parse(JSON.stringify(temp)));


    } else if (type == 2) {
      let temp = { json: require('../../json-templates/procedureRequest.json'), expand: true }
      this.test.tests.push(JSON.parse(JSON.stringify(temp)));
    }
  }

  removeElement(type, index) {
    if (type == 0) {
      if (this.medications.meds.length == 1) {
        this.medications.meds.pop();

      } else {
        let counter = index + 1
        for (let i = index; i < this.medications.meds.length - 1; i++) {
          this.medications.meds[i] = this.medications.meds[counter++];

        }
        this.medications.meds.length--;
      }
    } else if (type == 1) {
      if (this.procedures.proc.length == 1) {
        this.procedures.proc.pop();
      } else {
        let counter = index + 1
        for (let i = index; i < this.procedures.proc.length - 1; i++) {
          this.procedures.proc[i] = this.procedures.proc[counter++];
        }
        this.procedures.proc.length--;
      }
    } else {
      if (this.test.tests.length == 1) {
        this.test.tests.pop();
      } else {
        let counter = index + 1
        for (let i = index; i < this.test.tests.length - 1; i++) {
          this.test.tests[i] = this.test.tests[counter++];
        }
        this.test.tests.length--;
      }
    }
  }

  submit() {
    // this.form.scans=this.scansInput;
    //this.form.tests=this.testsInput;
    // alert("prescription Created");
    //this.navCtrl.setRoot(HistoryPage);
    console.log(this.medications.meds)
  }

}
