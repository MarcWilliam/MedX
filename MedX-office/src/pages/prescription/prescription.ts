import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';
import { HistoryPage } from '../history/history';

import { MedXProvider } from '../../providers/medx';

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
  public all = [];

  public procedures = { proc: [] };

  public medicationTemplate: any;
  public medications = { meds: [] };

  public test = { tests: [] };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public toastCtrl: ToastController,
    private medXProvider: MedXProvider
  ) {

    this.medications = { meds: new Array() };
    this.procedures = { proc: new Array() };
    this.test = { tests: new Array() };
    this.all = new Array();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrescriptionPage');
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'prescription Created',
      duration: 2000,
      position: 'middle'
    });

    toast.onDidDismiss(() => {
      this.navCtrl.setRoot(HistoryPage);
    });

    toast.present();
  }

  expand(id, index) {
    if (id == 0) {
      this.medications.meds[index].expand = !this.medications.meds[index].expand;
    } else if (id == 1) {
      this.procedures.proc[index].expand = !this.procedures.proc[index].expand;
    } else if (id == 2) {
      this.test.tests[index].expand = !this.test.tests[index].expand;
    }
  }

  addElement(type) {
    if (type == 0) {

      let temp = { json: require('../../json-templates/medicationRequest.json'), expand: true }
      temp.json.authoredOn = Date();
      this.medications.meds.push(JSON.parse(JSON.stringify(temp)));

    } else if (type == 1) {
      let temp = { json: require('../../json-templates/procedureRequest.json'), expand: true }
      temp.json.authoredOn = Date();
      this.procedures.proc.push(JSON.parse(JSON.stringify(temp)));


    } else if (type == 2) {
      let temp = { json: require('../../json-templates/procedureRequest.json'), expand: true }
      temp.json.authoredOn = Date();
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

  async submit() {
    this.all[0] = this.medications;
    this.all[1] = this.procedures;
    this.all[2] = this.test;
    this.storage.set("Records", this.all);
    this.presentToast();

    console.log(this.all);

    let medX = await this.medXProvider.getInstance();

    if (this.medications.meds.length > 0) {
      await medX.RecordFactory.create({
        patient: "0xf17f52151EbEF6C7334FAD080c5704D77216b732",
        record: this.medications.meds,
        attachments: []
      });
    }
    if (this.procedures.proc.length > 0) {
      await medX.RecordFactory.create({
        patient: "0xf17f52151EbEF6C7334FAD080c5704D77216b732",
        record: this.procedures.proc,
        attachments: []
      });
    }
    if (this.test.tests.length > 0) {
      await medX.RecordFactory.create({
        patient: "0xf17f52151EbEF6C7334FAD080c5704D77216b732",
        record: this.test.tests,
        attachments: []
      });
    }
  }

}
