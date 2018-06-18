import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, PopoverController } from 'ionic-angular';

import { QueryModalPage } from '../query-modal/query-modal';
import { DatabaseProvider } from '../../providers/database';
import { PopoverPage } from '../popover/popover';

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
    public popoverCtrl: PopoverController,
    private db: DatabaseProvider
  ) { }

  ionViewDidLoad() {
  }

  presentPopover(myEvent) {
    let popoverData = {
      callback: (category) => {
        this.db.getByCategory(`queries`, category)
          .then((res) => {
            this.queries = res;
          });
      }
    };
    let popover = this.popoverCtrl.create(PopoverPage, popoverData, { cssClass: 'custom-popover' });
    popover.present({
      ev: myEvent
    });
  }

  presentQueryModal(query) {
    let modal = this.modalCtrl.create(QueryModalPage, { query: query, from: 0 });
    modal.present();
  }

}

