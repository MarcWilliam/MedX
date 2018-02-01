import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { DemographicsPage } from '../pages/demographics/demographics';
import { LaboratoryPage } from '../pages/laboratory/laboratory';
import { OfficeVisitsPage } from '../pages/office-visits/office-visits';
import { SummaryPage } from '../pages/summary/summary';
import { SurgeriesPage } from '../pages/surgeries/surgeries';
import { ProvidersPage } from '../pages/providers/providers';

@NgModule({
  declarations: [
    ConferenceApp,
    DemographicsPage,
    LaboratoryPage,
    OfficeVisitsPage,
    SummaryPage,
    SurgeriesPage,
    ProvidersPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(ConferenceApp, {}, {
      links: []
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    DemographicsPage,
    LaboratoryPage,
    OfficeVisitsPage,
    SummaryPage,
    SurgeriesPage,
    ProvidersPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    InAppBrowser,
    SplashScreen
  ]
})
export class AppModule { }
