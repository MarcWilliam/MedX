import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController  } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { StatisticsPage } from '../statistics/statistics';
import { QueryModalPage } from '../query-modal/query-modal';

/**
 * Generated class for the StorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-store',
  templateUrl: 'store.html',
})
export class StorePage {
  private url = "http://localhost:8064/api/queries";
  private queries:any = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private httpClient: HttpClient,
    public modalCtrl: ModalController
  ) {
    
  }

  ionViewDidLoad(){
    this.getQueries();
  }

  getQueries(){
    this.httpClient.get(this.url).subscribe((res)=>{
      this.queries = res;
    });
  }

  presentQueryModal(query){
    let modal = this.modalCtrl.create(QueryModalPage, { query: query, from: 0 });
    modal.present();
  }

}

