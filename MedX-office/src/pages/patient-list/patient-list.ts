import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HistoryPage } from '../history/history';

/**
 * Generated class for the PatientListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-patient-list',
  templateUrl: 'patient-list.html',
})
export class PatientListPage {
  patients = [
    {
      photo: ["http://www.businessplusng.com/blog/wp-content/uploads/2016/10/successful-social-media-campaign-featured-1000x530.jpg"],
      name: "John Smith",
      gender: "Male",
      birthDate: new Date(),
      identifier: "1"
    },
    {
      photo: ["http://www.businessplusng.com/blog/wp-content/uploads/2016/10/successful-social-media-campaign-featured-1000x530.jpg"],
      name: "John Smith",
      gender: "Male",
      birthDate: new Date(),
      identifier: "1"
    },
    {
      photo: ["http://www.businessplusng.com/blog/wp-content/uploads/2016/10/successful-social-media-campaign-featured-1000x530.jpg"],
      name: "John Smith",
      gender: "Male",
      birthDate: new Date(),
      identifier: "1"
    },
    {
      photo: ["http://www.businessplusng.com/blog/wp-content/uploads/2016/10/successful-social-media-campaign-featured-1000x530.jpg"],
      name: "John Smith",
      gender: "Male",
      birthDate: new Date(),
      identifier: "1"
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatientListPage');
  }
  patientClicked(identifier) {
    this.navCtrl.push(HistoryPage, { identifier: identifier });
  }
}
