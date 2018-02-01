import { Component, ViewChild } from '@angular/core';

import { Events, MenuController, Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Storage } from '@ionic/storage';

import { DemographicsPage } from '../pages/demographics/demographics';
import { LaboratoryPage } from '../pages/laboratory/laboratory';
import { OfficeVisitsPage } from '../pages/office-visits/office-visits';
import { SummaryPage } from '../pages/summary/summary';
import { SurgeriesPage } from '../pages/surgeries/surgeries';
import { ProvidersPage } from '../pages/providers/providers';

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
export class ConferenceApp {
  // the root nav is a child of the root app component
  // @ViewChild(Nav) gets a reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  // List of pages that can be navigated to from the left menu
  // the left menu only works after login
  // the login page disables the left menu
  appPages: PageInterface[] = [
    { title: 'Demographics', name: 'DemographicsPage', component: DemographicsPage, tabComponent: DemographicsPage, index: 0, icon: 'information-circle' },
    { title: 'Summary', name: 'SummaryPage', component: SummaryPage, tabComponent: SummaryPage, index: 1, icon: 'information-circle' },
    { title: 'Office visits', name: 'OfficeVisitsPage', component: OfficeVisitsPage, tabComponent: OfficeVisitsPage, index: 2, icon: 'information-circle' },
    { title: 'Laboratory', name: 'LaboratoryPage', component: LaboratoryPage, tabComponent: LaboratoryPage, index: 3, icon: 'information-circle' },
    { title: 'Surgeries', name: 'SurgeriesPage', component: SurgeriesPage, tabComponent: SurgeriesPage, index: 3, icon: 'information-circle' }

  ];
  navPages: PageInterface[] = [
    { title: 'Providers', name: 'ProvidersPage', component: ProvidersPage, tabComponent: ProvidersPage, index: 0, icon: 'person' }

  ];
  rootPage: any;

  constructor(
    public events: Events,
    public menu: MenuController,
    public platform: Platform,
    public storage: Storage,
    public splashScreen: SplashScreen
  ) {
    
    this.rootPage = DemographicsPage;
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

  platformReady() {
    // Call any initial plugins when ready
    this.platform.ready().then(() => {
      this.splashScreen.hide();
    });
  }

  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNavs()[0];

    // Tabs are a special case because they have their own navigation
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
