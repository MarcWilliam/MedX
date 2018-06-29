import { Component, ViewChild } from '@angular/core';

import { Events, MenuController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Storage } from '@ionic/storage';

import { TutorialPage } from '../pages/tutorial/tutorial';
import { ProfilePage } from '../pages/profile/profile';
//import {HistoryPage} from '../pages/history/history';
//import {DrugsListPage} from '../pages/drugs-list/drugs-list';
//import {CreateTestPage} from '../pages/create-test/create-test'; 
import { PatientListPage } from '../pages/patient-list/patient-list';

import { UserData } from '../providers/user-data';
import { LoginPage } from '../pages/login/login';

// the next declaration is for test templates from json file
declare var require: any

export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}

@Component({
  templateUrl: 'app.template.html'
})
export class ConferenceApp {
  // the root nav is a child of the root app component
  // @ViewChild(Nav) gets a reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  // List of pages that can be navigated to from the left menu
  // the left menu only works after login
  // the login page disables the left menu
  appPages: PageInterface[] = [

    { title: 'Patients', name: 'PatientListPage', component: PatientListPage, icon: 'people' },
    //{ title: 'History Page', name: 'HistoryPage', component: HistoryPage , icon: 'information-circle' },
    //{ title: 'Drugs List' , name: 'DrugsListPage',component: DrugsListPage , icon: 'information-circle'},
    //{ title: 'Create New Test' , name: 'CreateTestPage' , component: CreateTestPage , icon: 'information-circle'},
    { title: 'Profile', name: 'ProfilePage', component: ProfilePage, icon: 'person' },
    { title: 'Log out', name: 'LoginPage', component: LoginPage, index: 5, icon: 'log-out' }

  ];
  loggedInPages: PageInterface[] = [
  ];
  loggedOutPages: PageInterface[] = [
  ];
  rootPage: any;

  constructor(
    public events: Events,
    public userData: UserData,
    public menu: MenuController,
    public platform: Platform,
    public storage: Storage,
    public splashScreen: SplashScreen,
    public statusBar: StatusBar,
  ) {

    this.userData.hasLoggedIn().then(hasLoggedIn => {
      this.rootPage = hasLoggedIn ? ProfilePage : LoginPage;
    });
    this.platformReady();

    // reading test template from json
    var bloodTest = require('../json-templates/bloodTest.json');
    var EBT = require('../json-templates/electrolyteBloodTest.json');
    let temparr = new Array();
    temparr.push(bloodTest);
    temparr.push(EBT);
    this.storage.set("tests", temparr);
    //console.log(json);
  }

  openPage(page: PageInterface) {
    let params = {};

    // the nav component was found using @ViewChild(Nav)
    // setRoot on the nav to remove previous pages and only have this page
    // we wouldn't want the back button to show in this scenario
    if (page.index) {
      params = { tabIndex: page.index };
    }

    // If we are already on tabs just change the selected tab
    // don't setRoot again, this maintains the history stack of the
    // tabs even if changing them from the menu
    if (this.nav.getActiveChildNavs().length && page.index != undefined) {
      this.nav.getActiveChildNavs()[0].select(page.index);
    } else {
      // Set the root of the nav with params if it's a tab index
      this.nav.setRoot(page.name, params).catch((err: any) => {
        console.log(`Didn't set nav root: ${err}`);
      });
    }
  }

  openLoginPage() {
    this.nav.setRoot(LoginPage);
  }

  openTutorial() {
    this.nav.setRoot(TutorialPage);
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

    if (this.nav.getActive() && this.nav.getActive().id === page.name) {
      return color;
    }
    return;
  }
}
