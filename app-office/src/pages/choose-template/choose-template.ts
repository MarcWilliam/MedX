import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController  } from 'ionic-angular';
import { ListTemplatesPage} from '../list-templates/list-templates';
/**
 * Generated class for the ChooseTemplatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choose-template',
  templateUrl: 'choose-template.html',
})
export class ChooseTemplatePage {
  private templatesModal  ;
  constructor(public navCtrl: NavController, public navParams: NavParams , public modalCtrl : ModalController) {
    this.templatesModal =  this.modalCtrl.create(ListTemplatesPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseTemplatePage');
  }
  openModal(){
    this.templatesModal.present();
  }

}
