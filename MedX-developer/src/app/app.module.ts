import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule, Injectable } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { ConferenceApp } from './app.component';

import { QueryService } from '../services/queries.service';

import { ProfilePage } from '../pages/profile/profile';
import { NewPage } from '../pages/new/new';
import { StorePage } from '../pages/store/store';
import { StatisticsPage } from '../pages/statistics/statistics';
import { HistoryPage } from '../pages/history/history';


@NgModule({
  declarations: [
    ConferenceApp,
    ProfilePage,
    NewPage,
    StorePage,
    StatisticsPage,
    HistoryPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(ConferenceApp, {}, {
      links:[
        { component: NewPage, name: 'NewPage', segment: 'new' },
        { component: StorePage, name: 'StorePage', segment: 'store' },
        { component: ProfilePage, name: 'ProfilePage', segment: 'profile' },
        { component: HistoryPage, name: 'HistoryPage', segment: 'history' }
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    ProfilePage,
    NewPage,
    StorePage,
    StatisticsPage,
    HistoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    /*QueryService*/
  ]
})
export class AppModule {}
