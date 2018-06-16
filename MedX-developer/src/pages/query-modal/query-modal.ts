import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, App, ModalController } from 'ionic-angular';

import { QueryService } from '../../services/queries.service';
import { EditQueryPage } from '../edit-query/edit-query';
import { ExecuteFormPage } from '../execute-form/execute-form';

@Component({
  selector: 'page-query-modal',
  templateUrl: 'query-modal.html',
})
export class QueryModalPage {

  private query: QueryService;
  private from: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public appCtrl: App,
    public modalCtrl: ModalController
  ) {
    this.query = this.navParams.get("query");
    this.from = this.navParams.get("from") == 0 ? "Execute" : "Edit";
    console.log(this.query.media.main);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QueryModalPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  showConfirm(query) {
    if (this.from === "Execute") {
      this.dismiss();
      this.appCtrl.getRootNav().push(ExecuteFormPage, { query: query });
    }
    else {
      this.dismiss();
      this.appCtrl.getRootNav().push(EditQueryPage, { query: query });
    }
  }

}
