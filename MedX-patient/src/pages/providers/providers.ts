import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Doctor } from './doctor';

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

  doctors:Doctor[] = new Array();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.doctors.push(new Doctor("John Smith", "17 Jan", "15 Mar"));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProvidersPage');
  }

}
