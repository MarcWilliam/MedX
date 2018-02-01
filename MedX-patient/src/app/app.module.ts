import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { PopoverPage } from '../pages/about-popover/about-popover';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { SessionDetailPage } from '../pages/session-detail/session-detail';
import { SignupPage } from '../pages/signup/signup';
import { SupportPage } from '../pages/support/support';
import { TabsPage } from '../../.tmp/src/pages/tabs-page/tabs-page';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';

import { DemographicsPage } from '../pages/demographics/demographics';
import { LaboratoryPage } from '../pages/laboratory/laboratory';
import { OfficeVisitsPage } from '../pages/office-visits/office-visits';
import { SummaryPage } from '../pages/summary/summary';
import { SurgeriesPage } from '../pages/surgeries/surgeries';

@NgModule({
  declarations: [
    ConferenceApp,
    AccountPage,
    LoginPage,
    PopoverPage,
    SessionDetailPage,
    SignupPage,
    SupportPage,
    DemographicsPage,
    LaboratoryPage,
    OfficeVisitsPage,
    SummaryPage,
    SurgeriesPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(ConferenceApp, {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs' },
        { component: SessionDetailPage, name: 'SessionDetail', segment: 'sessionDetail/:sessionId' },
        { component: SupportPage, name: 'SupportPage', segment: 'support' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: SignupPage, name: 'SignupPage', segment: 'signup' }
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    AccountPage,
    LoginPage,
    PopoverPage,
    SessionDetailPage,
    SignupPage,
    SupportPage,
    DemographicsPage,
    LaboratoryPage,
    OfficeVisitsPage,
    SummaryPage,
    SurgeriesPage,
    TabsPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConferenceData,
    UserData,
    InAppBrowser,
    SplashScreen
  ]
})
export class AppModule { }
