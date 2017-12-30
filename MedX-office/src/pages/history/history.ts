import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage {
  page = "'info'";
  constructor(public navCtrl: NavController) {
    
  }
}
