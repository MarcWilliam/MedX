import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { QueryModalPage } from '../query-modal/query-modal';
import { DatabaseProvider } from '../../providers/database';

@IonicPage()
@Component({
  selector: 'page-store',
  templateUrl: 'store.html',
})
export class StorePage {
  private queries: any = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private db: DatabaseProvider 
  ) {
  }

  ionViewDidLoad() {
    this.db.get(`queries`)
      .then((res) => {
        this.queries = res;
    });
  }

  presentQueryModal(query) {
    let modal = this.modalCtrl.create(QueryModalPage, { query: query, from: 0 });
    modal.present();
  }

}

