import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DrugsListDetalsPage} from '../drugs-list-detals/drugs-list-detals';
/**
 * Generated class for the DrugsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-drugs-list',
  templateUrl: 'drugs-list.html',
})
export class DrugsListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DrugsListPage');
  }
  Open(listNumber :number){
    this.navCtrl.push(DrugsListDetalsPage,{'level' : listNumber});
  }
}
