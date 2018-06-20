import { Component, ViewChild } from '@angular/core';

import { Events, MenuController, Nav, Platform, Loading, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {
  LOGIN_PAGE,
  DEMOGRAPHICS_PAGE,
  SUMMARY_PAGE,
  OFFICE_VISITS_PAGE,
  PROVIDERS_PAGE,
  PROFILE_PAGE,
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
  templateUrl: './app.template.html',
  selector: 'page-patient-app'
})
export class PatientApp {
  // the root nav is a child of the root app component
  // @ViewChild(Nav) gets a reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  // List of pages that can be navigated to from the left menu
  // the left menu only works after login
  // the login page disables the left menu
  appPages: PageInterface[] = [
    { title: 'Access', name: PROVIDERS_PAGE, component: PROVIDERS_PAGE, tabComponent: PROVIDERS_PAGE, index: 1, icon: 'key' },
    { title: 'Summary', name: SUMMARY_PAGE, component: SUMMARY_PAGE, tabComponent: SUMMARY_PAGE, index: 2, icon: 'pulse' },
    { title: 'Records', name: OFFICE_VISITS_PAGE, component: OFFICE_VISITS_PAGE, tabComponent: OFFICE_VISITS_PAGE, index: 2, icon: 'clipboard' },
    //{ title: 'Records', name: RECORD_LIST_PAGE, component: RECORD_LIST_PAGE, tabComponent: RECORD_LIST_PAGE, index: 3, icon: 'medkit' }
    { title: 'Info', name: DEMOGRAPHICS_PAGE, component: DEMOGRAPHICS_PAGE, tabComponent: DEMOGRAPHICS_PAGE, index: 3, icon: 'information-circle' },
    { title: 'Profile', name: PROFILE_PAGE, component: PROFILE_PAGE, tabComponent: PROFILE_PAGE, index: 4, icon: 'person' },
    { title: 'Log out', name: LOGIN_PAGE, component: LOGIN_PAGE, tabComponent: LOGIN_PAGE, index: 5, icon: 'log-out' }
  ];
  rootPage: any;

  loading: Loading;

  constructor(
    public events: Events,
    public menu: MenuController,
    public platform: Platform,
    public splashScreen: SplashScreen,
    public statusBar: StatusBar,
    private loadingCtrl: LoadingController,
  ) {
    this.platformReady();
    this.rootPage = LOGIN_PAGE;
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  openPage(page: PageInterface) {
    // this.showLoading();

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
      // Transparent status bar for android
      // #AARRGGBB where AA is an alpha value
      if (this.platform.is('android')) {
        this.statusBar.backgroundColorByHexString("#33000000");
      }

      this.splashScreen.hide();
    });
  }

  loggedInMenuDragged() {
    this.statusBar.backgroundColorByHexString("#00000000");
  }

  loggedInMenuClosed() {
    this.statusBar.backgroundColorByHexString("#33000000");
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

    if (this.nav.getActive() && this.nav.getActive().id === page.name) {
      return color;
    }
    return;
  }
}
