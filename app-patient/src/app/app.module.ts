import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UserData } from '../providers/user-data';
import { MedXProvider } from '../providers/medx';
import { GoogleDriveProvider } from '../providers/google-drive'

import { PatientApp } from './app.component';

@NgModule({
  declarations: [
    PatientApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(PatientApp, {
      preloadModules: true // DELETE DANGER AHEAD
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    PatientApp
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    StatusBar,
    SplashScreen,
    UserData,
    GoogleDriveProvider,
    MedXProvider
  ]
})
export class AppModule { }
