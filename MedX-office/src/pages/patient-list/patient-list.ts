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
  profileData: any;

  patients = [
    {
      photo: ["http://www.concordrusam.com/wp-content/uploads/2017/10/pro.jpg"],
      name: "Roland Mendel",
      gender: "male",
      birthDate: new Date("4/16/1992"),
      identifier: "1"
    },
    {
      photo: ["https://www.fakepersongenerator.com/Face/male/male1085213663605.jpg"],
      name: "Clyde J Day",
      gender: "male",
      birthDate: new Date("4/16/1992"),
      identifier: "1"
    },
    {
      photo: ["https://www.fakepersongenerator.com/Face/female/female20161025179486023.jpg"],
      name: "Lori J Swayze",
      gender: "female",
      birthDate: new Date("7/3/1991"),
      identifier: "1"
    },
    {
      photo: ["https://www.fakepersongenerator.com/Face/male/male20161083786718811.jpg"],
      name: "Franklin A Kelly",
      gender: "male",
      birthDate: new Date("4/27/1981"),
      identifier: "1"
    },
    {
      photo: ["https://www.fakepersongenerator.com/Face/female/female20151024319254944.jpg"],
      name: "Julie J Williams",
      gender: "female",
      birthDate: new Date("10/25/1983"),
      identifier: "1"
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.profileData = this.navParams.get('data'); // data from the register form
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatientListPage');
  }
  patientClicked(identifier) {
    this.navCtrl.push(HistoryPage, { identifier: identifier });
  }
}
