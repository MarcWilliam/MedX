import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OfficeVisitsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var require: any;
@IonicPage()
@Component({
  selector: 'page-office-visits',
  templateUrl: 'office-visits.html',
})
export class OfficeVisitsPage {
  public records ;
  public hasRecords = false;
  public procedures = { proc: [] };
  public test = { tests: [] };
  public medications = { meds: [] }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.medications = { meds: new Array() };
    this.procedures = { proc: new Array() };
    this.test = { tests: new Array() };
    this.records = (require("../../data.json"));

    this.medications=this.records[0];
      this.procedures=this.records[1];
      this.test=this.records[2];
      this.hasRecords=true;
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad OfficeVisitsPage');
  }

}
