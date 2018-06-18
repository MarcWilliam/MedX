import { Component, ViewChild } from '@angular/core';

import { Events, MenuController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {
  LOGIN_PAGE,
  DEMOGRAPHICS_PAGE,
  SUMMARY_PAGE,
  OFFICE_VISITS_PAGE,
  //LABORATORY_PAGE,
  //SURGERIES_PAGE,
  PROVIDERS_PAGE,
  //RECORD_LIST_PAGE
} from '../pages/pages.constants';

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
  templateUrl: './app.template.html'
})
export class PatientApp {
  // the root nav is a child of the root app component
  // @ViewChild(Nav) gets a reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  // List of pages that can be navigated to from the left menu
  // the left menu only works after login
  // the login page disables the left menu
  appPages: PageInterface[] = [
    { title: 'Demographics', name: DEMOGRAPHICS_PAGE, component: DEMOGRAPHICS_PAGE, tabComponent: DEMOGRAPHICS_PAGE, index: 0, icon: 'information-circle' },
    { title: 'Summary', name: SUMMARY_PAGE, component: SUMMARY_PAGE, tabComponent: SUMMARY_PAGE, index: 1, icon: 'pulse' },
    { title: 'Records', name: OFFICE_VISITS_PAGE, component: OFFICE_VISITS_PAGE, tabComponent: OFFICE_VISITS_PAGE, index: 2, icon: 'clipboard' },
    //{ title: 'Laboratory', name: LABORATORY_PAGE, component: LABORATORY_PAGE, tabComponent: LABORATORY_PAGE, index: 3, icon: 'flask' },
    //{ title: 'Surgeries', name: SURGERIES_PAGE, component: SURGERIES_PAGE, tabComponent: SURGERIES_PAGE, index: 4, icon: 'medkit' },
    //{ title: 'Access', name: SCANNER_PAGE, component: SCANNER_PAGE, tabComponent: SCANNER_PAGE, index: 5, icon: 'qr-scanner' },
    //{ title: 'Records', name: RECORD_LIST_PAGE, component: RECORD_LIST_PAGE, tabComponent: RECORD_LIST_PAGE, index: 6, icon: 'medkit' }


  ];
  navPages: PageInterface[] = [
    { title: 'Access', name: 'ProvidersPage', component: PROVIDERS_PAGE, tabComponent: PROVIDERS_PAGE, index: 0, icon: 'key' }

  ];
  rootPage: any;

  constructor(
    public events: Events,
    public menu: MenuController,
    public platform: Platform,
    public splashScreen: SplashScreen,
    public statusBar: StatusBar,
  ) {
    this.platformReady();
    this.rootPage = LOGIN_PAGE;
  }

  openPage(page: PageInterface) {
    if (page.index) {
      this.nav.setRoot(page.component, { tabIndex: page.index });
    } else {
      this.nav.setRoot(page.component).catch(() => {
        console.log("Didn't set nav root");
      });
    }
  }

  openLoginPage() {
    this.nav.setRoot(LOGIN_PAGE);
  }

  platformReady() {
    // Call any initial plugins when ready
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  isActive(page: PageInterface, color = 'primary') {
    let childNav = this.nav.getActiveChildNavs()[0];

    // Tabs are a special case because they have their own navigation
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return color;
      }
      return;
    }

    if (this.nav.getActive() && this.nav.getActive().name === page.name) {
      return color;
    }
    return;
  }
}
