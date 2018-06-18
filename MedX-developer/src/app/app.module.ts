import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { GoogleDrive } from '../providers/google-drive'
import { ConferenceApp } from './app.component';

import { ProfilePage } from '../pages/profile/profile';
import { NewPage } from '../pages/new/new';
import { StorePage } from '../pages/store/store';
import { StatisticsPage } from '../pages/statistics/statistics';
import { HistoryPage } from '../pages/history/history';
import { QueryModalPage } from '../pages/query-modal/query-modal';
import { PublishedQueriesPage } from '../pages/published-queries/published-queries';
import { EditQueryPage } from '../pages/edit-query/edit-query';
import { ExecuteFormPage } from '../pages/execute-form/execute-form';
import { DatabaseProvider } from '../providers/database';
import { PopoverPage } from '../pages/popover/popover';

@NgModule({
  declarations: [
    ConferenceApp,
    ProfilePage,
    NewPage,
    StorePage,
    StatisticsPage,
    HistoryPage,
    PublishedQueriesPage,
    QueryModalPage,
    EditQueryPage,
    ExecuteFormPage,
    PopoverPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(ConferenceApp, {}, {
      links:[
        { component: NewPage, name: 'NewPage', segment: 'new' },
        { component: StorePage, name: 'StorePage', segment: 'store' },
        { component: ProfilePage, name: 'ProfilePage', segment: 'profile' },
        { component: HistoryPage, name: 'HistoryPage', segment: 'history' },
        { component: PublishedQueriesPage, name: 'PublishedQueriesPage', segment: 'published-queries' }
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
    HistoryPage,
    QueryModalPage,
    PublishedQueriesPage,
    EditQueryPage,
    ExecuteFormPage,
    PopoverPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    StatusBar,
    SplashScreen,
    GoogleDrive,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
  ]
})
export class AppModule {}
