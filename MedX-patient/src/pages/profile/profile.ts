import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

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
    avatar: "http://www.concordrusam.com/wp-content/uploads/2017/10/pro.jpg",
    name: "Roland Mendel",
    address: "120 Hanover Sq. London",
    phone: "+20 012 345 6789",
    email: "RolandMendel@gmail.com",
    gender: "Male",
    birthDate: "4/16/1992",
    maritalStatus: "single",
    language: "English, French, Arabic",
    publicKey: "0x627306090abaB3A6e1400e9345bC60c78a8BEf57",
  };

  constructor(public navCtrl: NavController) { }

  getCredentials() {
    console.log("getCredentials method"); // fill u-port here
  }

  requestCredentials() {
    console.log("requestCredentials method"); //fill u-port here
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
}
