import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";


import { ListTemplatesPage } from '../list-templates/list-templates';
import { PrescriptionPage } from '../prescription/prescription';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage {
  page = "info";
  private templatesModal;
  public records ;
  public hasRecords = false;
  public procedures = { proc: [] };
  public test = { tests: [] };
  public medications = { meds: [] };
  public dir : string;
  public ready =false;
  constructor(public translate : TranslateService ,public navCtrl: NavController, public modalCtrl: ModalController,public storage : Storage) {
    this.templatesModal = this.modalCtrl.create(ListTemplatesPage);
    this.medications = { meds: new Array() };
    this.procedures = { proc: new Array() };
    this.test = { tests: new Array() };
    this.storage.get('dir').then(dir=>{
      this.dir=dir;
      this.ready=true;
    });
    this.storage.get("Records").then(data=>{
      this.records = data
      this.medications=this.records[0];
      this.procedures=this.records[1];
      this.test=this.records[2];
      this.hasRecords=true;
      console.log(this.records);
    },err=>{
      console.error(err);
      this.hasRecords=false;
    })
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

  openTemplate() {
    this.templatesModal.present();
  }
  openPrescription() {
    this.navCtrl.push(PrescriptionPage);
  }
}
