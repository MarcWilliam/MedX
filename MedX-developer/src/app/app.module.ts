import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { IonicStorageModule } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { StorePage } from '../pages/store/store';
import { StatisticsPage } from '../pages/statistics/statistics';
import { HistoryPage } from '../pages/history/history';


@NgModule({
  declarations: [
    ConferenceApp,
    ProfilePage,
    HomePage,
    StorePage,
    StatisticsPage,
    HistoryPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(ConferenceApp, {}, {
      links:[
        { component: HomePage, name: 'HomePage', segment: 'home' },
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
    HomePage,
    StorePage,
    StatisticsPage,
    HistoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
