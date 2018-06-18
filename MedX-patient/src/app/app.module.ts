import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GoogleDrive } from '../providers/google-drive'

import { PatientApp } from './app.component';

@NgModule({
  declarations: [
    PatientApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(PatientApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    PatientApp    
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    StatusBar,
    SplashScreen,
    GoogleDrive
  ]
})
export class AppModule { }
