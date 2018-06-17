import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, LoadingController, ToastController } from 'ionic-angular';

import { Doctor } from './doctor';
import { ScannerPage } from '../scanner/scanner';
import { RecordListPage } from '../record-list/record-list';

/**
 * Generated class for the ProvidersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-providers',
  templateUrl: 'providers.html',
})

export class ProvidersPage {

  doctors: Doctor[] = [];
  testCheckboxOpen = false;
  testCheckboxResult: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController) {
    this.doctors.push(new Doctor("John Smith", "17 Jan", "15 Mar"));
  }

  openScannerModal() {
    let scannerModal = this.modalCtrl.create(ScannerPage);
    scannerModal.present();

    scannerModal.onDidDismiss(content => {
      if (content) {
        this.toastCtrl.create({
          message: 'QR Scanned successfully!',
          duration: 3000,
          position: 'bottom'
        }).present();

        let loading = this.loadingCtrl.create({
          content: 'Please wait...'
        });
        loading.present();

        setTimeout(() => {
          loading.dismiss();
          this.openRecordListModal(content);
        }, 300);
      }
    })
  }

  openRecordListModal(content?) {
    let office = content;
    let recordsListModal = this.modalCtrl.create(RecordListPage, { 'office': office });
    recordsListModal.present();
    recordsListModal.onDidDismiss(content => {
      if (content) {
        this.doctors.push(new Doctor(office, content[0].title, content[1].title));
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProvidersPage');
  }

}