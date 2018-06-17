import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ListTemplatesPage } from '../list-templates/list-templates';
import { PrescriptionPage } from '../prescription/prescription';
@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage {
  page = "info";
  private templatesModal;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.templatesModal = this.modalCtrl.create(ListTemplatesPage);
  }

  openTemplate() {
    this.templatesModal.present();
  }
  openPrescription() {
    this.navCtrl.push(PrescriptionPage);
  }
}
