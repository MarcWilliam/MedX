import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { StatisticsPage } from '../statistics/statistics';
import { HistoryPage } from '../history/history';
import { Query } from './query';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  private query:string;
  private queryCost:number;
  private submit:any;

  public queries:Query[] = new Array();
  private statisticsPage:any;
  private historyPage:any;

  constructor(public navCtrl: NavController) {
    this.statisticsPage = StatisticsPage;
    this.historyPage = HistoryPage;
  }

  logForm(){

    this.queries.push(new Query(this.query, this.queryCost));
    this.navCtrl.push(this.statisticsPage, this.queries);

    this.query = '';

    if(!this.submit.hidden)
      this.submit.hidden = true;

  }

  calcCost(){
    if(this.query.length > 0 && this.query.length < 20){
      this.queryCost = 20;
    }else if(this.query.length > 20){
      this.queryCost = 50;
    }

    this.submit = document.getElementById('submit');
    
    this.submit.hidden = false;
  }

  preQueries(){
    this.navCtrl.push(this.historyPage, this.queries);
  }
}
