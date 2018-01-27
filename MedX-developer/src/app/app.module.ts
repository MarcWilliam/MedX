import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { HttpModule } from '@angular/http';
=======
>>>>>>> master
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

<<<<<<< HEAD
import { IonicStorageModule } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { StorePage } from '../pages/store/store';
import { StatisticsPage } from '../pages/statistics/statistics';
import { HistoryPage } from '../pages/history/history';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';

@NgModule({
  declarations: [
    ConferenceApp,
    ProfilePage,
    HomePage,
    StorePage,
=======
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatisticsPage } from '../pages/statistics/statistics';
import { HistoryPage } from '../pages/history/history';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
>>>>>>> master
    StatisticsPage,
    HistoryPage
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
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
=======
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
>>>>>>> master
    StatisticsPage,
    HistoryPage
  ],
  providers: [
<<<<<<< HEAD
    ConferenceData,
    UserData,
=======
>>>>>>> master
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
