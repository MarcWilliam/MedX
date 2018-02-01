import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { DemographicsPage } from '../demographics/demographics';
import { SummaryPage } from '../summary/summary';


@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = DemographicsPage;
  tab2Root: any = SummaryPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
