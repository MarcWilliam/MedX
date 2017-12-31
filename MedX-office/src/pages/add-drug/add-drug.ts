import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController  } from 'ionic-angular';

/**
 * Generated class for the AddDrugPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-drug',
  templateUrl: 'add-drug.html',
})
export class AddDrugPage {
  public newDrug ="";
  public drugList : Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams ,public viewCntrl :ViewController) {
    this.drugList = this.navParams.get('list');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDrugPage');
  }
  addNew(){
    this.drugList[this.drugList.length] =this.newDrug;
    this.viewCntrl.dismiss(this.drugList);
  }
}
