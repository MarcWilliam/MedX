import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { MedXProvider } from '../../providers/medx';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  user = {
    name: "Roland Mendel",
    gender: "Male",
    birthDate: "4/16/1992",
    address: "120 Hanover Sq.London",
    maritalStatus: "single",
    photo: "http://www.concordrusam.com/wp-content/uploads/2017/10/pro.jpg",
    telecom: {
      phone: "+20 012 345 6789",
      email: "RolandMendel@gmail.com"
    },
    publicKey: "0xf17f52151EbEF6C7334FAD080c5704D77216b732",
    contact: {
      relationship: "",
      name: "",
      telecom: {
        phone: "",
        email: ""
      },
      address: "",
      gender: "",
      organization: "",
      period: {
        from: "",
        to: ""
      },
    },
    communication: {
      language: "English, French, Arabic",
      preferred: "",
    }
  }

  constructor(public navCtrl: NavController, private medXProvider: MedXProvider) { }

  getCredentials() {
    console.log("getCredentials method"); // fill u-port here
  }

  requestCredentials() {
    console.log("requestCredentials method"); //fill u-port here
  }

  async ionViewWillLoad() {
    /*let medX = await this.medXProvider.getInstance();
    let keystore = await medX.KeystoreFactory.getKeyStore();
    let profile = (await keystore.getAttribs()).profile;
    if (profile) {
      Object.assign(this.user, profile);
    }*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
}
