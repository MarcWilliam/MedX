import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { StorePage } from '../pages/store/store';
import { HistoryPage } from '../pages/history/history';


export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}

@Component({
  templateUrl: 'app.html'
})
export class ConferenceApp {

  // the root nav is a child of the root app component
  // @ViewChild(Nav) gets a reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  // List of pages that can be navigated to from the left menu
  // the left menu only works after login
  // the login page disables the left menu
  appPages: PageInterface[] = [
    
    { title: 'Profile', name: 'ProfilePage', component: ProfilePage , icon: 'person' },
    { title: 'Home', name: 'HomePage', component: HomePage , icon: 'home' },
    { title: 'Store' , name: 'StorePage', component: StorePage , icon: 'cart'},
    { title: 'History' , name: 'HistoryPage', component: HistoryPage , icon: 'timer'}
  ];

  rootPage: any;

  constructor() {

    this.rootPage = HomePage;

  }

  openPage(page: PageInterface) {
    let params = {};
    
    if (page.index) {
      params = { tabIndex: page.index };
    }
    
    if (this.nav.getActiveChildNavs().length && page.index != undefined) {
      this.nav.getActiveChildNavs()[0].select(page.index);
    } else {
      this.nav.setRoot(page.name, params).catch((err: any) => {
        console.log(`Didn't set nav root: ${err}`);
      });
    }
  }

  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNavs()[0];
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
    if (this.nav.getActive() && this.nav.getActive().name === page.name) {
      return 'primary';
    }
    return;
  }


}

