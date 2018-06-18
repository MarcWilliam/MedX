import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { QueryModalPage } from '../query-modal/query-modal';
import { DatabaseProvider } from '../../providers/database';

@IonicPage()
@Component({
  selector: 'page-published-queries',
  templateUrl: 'published-queries.html',
})
export class PublishedQueriesPage {
  private queries: any = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private db: DatabaseProvider
  ) {
  }

  ionViewDidEnter() {
    this.db.getById(`queries`, `/4886718345`).then((res) => {
      this.queries = res;
    });
  }

  presentQueryModal(query) {
    let modal = this.modalCtrl.create(QueryModalPage, { query: query, from: 1 });
    modal.present();
  }

}
