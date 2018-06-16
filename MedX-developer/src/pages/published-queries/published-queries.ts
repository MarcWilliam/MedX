import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { QueryModalPage } from '../query-modal/query-modal';

/**
 * Generated class for the PublishedQueriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-published-queries',
  templateUrl: 'published-queries.html',
})
export class PublishedQueriesPage {
  private url = "http://localhost:8064/api/queries";
  private queries:any = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private httpClient: HttpClient,
    public modalCtrl: ModalController
  ) {
  }

  ionViewDidLoad() {
    this.getQueries();
  }

  getQueries(){
    this.httpClient.get(this.url+`/4886718345`).subscribe((res)=>{ //developer id
      this.queries = res;
    });
  }

  presentQueryModal(query){
    let modal = this.modalCtrl.create(QueryModalPage, { query: query, from: 1 });
    modal.present();
  }

}
