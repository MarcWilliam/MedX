import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, LoadingController, ToastController } from 'ionic-angular';

//import { Doctor } from './doctor';
import { SCANNER_PAGE, RECORD_LIST_PAGE } from '../pages.constants';

import { MedXProvider } from '../../providers/medx';

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
  myInput: any;
  doctors = [{
    profile: {
      photo: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg?s=200",
      name: "Dr. John Smith",
      access: new Date("5/17/2018"),
      expire: new Date("6/17/2018"),
      identifier: "1"
    }
  }];
  testCheckboxOpen = false;
  testCheckboxResult: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private medXProvider: MedXProvider
  ) {
    //this.doctors.push(new Doctor("John Smith", new Date("17/5/2018"), new Date("17/6/2018")));
  }

  openScannerModal() {
    let scannerModal = this.modalCtrl.create(SCANNER_PAGE);
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

  async openRecordListModal(content?) {

    let doctor = { accountAddress: content || "0x627306090abaB3A6e1400e9345bC60c78a8BEf57" };

    /*let medX = await this.medXProvider.getInstance();
    let doctorKeyStore = await medX.KeystoreFactory.getKeyStore(doctor.accountAddress);
    doctor = {
      ...doctor,
      ...(await doctorKeyStore.getAttribs()),
    };*/

    let recordsListModal = this.modalCtrl.create(RECORD_LIST_PAGE, { 'doctor': doctor });
    recordsListModal.present();
    recordsListModal.onDidDismiss(async (data) => {
      if (data) {
        let records = data.records;
        let doctor = data.doctor;
        doctor.profile.photo = "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg?s=200";
        doctor.profile.access = new Date("6/24/2018");
        doctor.profile.expire = new Date("9/24/2018");
        doctor.profile.identifier = doctor.accountAddress;
        this.doctors.push(doctor);
        let loading = this.loadingCtrl.create({
          content: 'Please wait...'
        });
        loading.present();

        /*if (records && records.length > 0) {
          for (let i = 0; i < records.length; i++) {
            (await doctorKeyStore.add(records[i]._address));
          }
        }*/
        loading.dismiss();
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProvidersPage');
  }

}