import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController  } from 'ionic-angular';
import {AddDrugPage} from '../add-drug/add-drug';
/**
 * Generated class for the DrugsListDetalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-drugs-list-detals',
  templateUrl: 'drugs-list-detals.html',
})
export class DrugsListDetalsPage {
  public level1 = ['Heroin',
    'Lysergic acid diethylamide (LSD)',
    'Marijuana (cannabis)*',
   'Methylenedioxymethamphetamine (ecstasy)',
   'Methaqualone',
    'Peyote']


  public level2 = ['Cocaine',
'Methamphetamine',
'Methadone',
'Hydromorphone (Dilaudid)',
'Meperidine (Demerol)',
'Oxycodone (OxyContin)',
'Fentanyl',
'Dexedrine',
'Adderall',
'Ritalin'];
  public modal :any;

  public listlevel: number;
  public viewList: Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams ,public modalCtrl : ModalController) {
    this.listlevel = this.navParams.get('level');
    if(this.listlevel == 1){
      this.viewList = this.level1;
    }else if(this.listlevel ==2){
      this.viewList =this.level2;
    }else{
      this.viewList = new Array();
    }
    this.modal = this.modalCtrl.create(AddDrugPage,{'list' : this.viewList})
    this.modal.onDidDismiss(data=>{
      this.viewList = data;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DrugsListDetalsPage');
  }
  addDrugModal(){
    this.modal.present();
  }

}
