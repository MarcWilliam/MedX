import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { IonicStorageModule } from '@ionic/storage';

import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader"

import { GoogleDriveProvider } from '../providers/google-drive';

import { ConferenceApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { ListTemplatesPage } from '../pages/list-templates/list-templates';
import { ChooseTemplatePage } from '../pages/choose-template/choose-template';
import { TemplatePage } from '../pages/template/template';
import { ProfilePage } from '../pages/profile/profile'
import { PrescriptionPage } from '../pages/prescription/prescription';
import { HistoryPage } from '../pages/history/history';
import { DrugsListPage } from '../pages/drugs-list/drugs-list';
import { DrugsListDetalsPage } from '../pages/drugs-list-detals/drugs-list-detals';
import { AddDrugPage } from '../pages/add-drug/add-drug';
import { CreateTestPage } from '../pages/create-test/create-test';
import {PatientListPage} from '../pages/patient-list/patient-list'; 

import { UserData } from '../providers/user-data';
import { ResourcesProvider } from '../providers/resources/resources';
import { MedXProvider } from '../providers/medx';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/langs/', '.json');
}

@NgModule({
  declarations: [
    ConferenceApp,
    LoginPage,
    RegisterPage,
    TutorialPage,
    ListTemplatesPage,
    ChooseTemplatePage,
    TemplatePage,
    ProfilePage,
    PrescriptionPage,
    HistoryPage,
    DrugsListPage,
    DrugsListDetalsPage,
    AddDrugPage,
    CreateTestPage,
    PatientListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: (HttpLoaderFactory),
            deps: [HttpClient]
        }
    }),
    IonicModule.forRoot(ConferenceApp, {}, {
      links: [
        { component: PatientListPage, name: 'PatientListPage', segment: 'patients'},
        { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: RegisterPage, name: 'RegisterPage', segment: 'register' },
        { component: ListTemplatesPage, name: 'ListTemplatesPage', segment: 'ListTemplates' },
        { component: ChooseTemplatePage, name: 'ChooseTemplatePage', segment: 'ChooseTemplatePage' },
        { component: TemplatePage, name: 'TemplatePage', segment: 'TemplatePage' },
        { component: ProfilePage, name: 'ProfilePage', segment: 'ProfilePage' },
        { component: PrescriptionPage, name: 'PrescriptionPage', segment: 'PrescriptionPage' },
        { component: HistoryPage, name: 'HistoryPage', segment: 'HistoryPage/:identifier' },
        { component: DrugsListPage, name: 'DrugsListPage', segment: 'DrugsListPage' },
        { component: DrugsListDetalsPage, name: 'Drugs Detals', segment: 'DrugsListDetalsPage' },
        { component: AddDrugPage, name: 'AddDrugPage', segment: 'AddDrugPage' },
        { component: CreateTestPage, name: "CreateTestPage", segment: 'CreateTestPage' }
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    LoginPage,
    RegisterPage,
    TutorialPage,
    ListTemplatesPage,
    ChooseTemplatePage,
    TemplatePage,
    ProfilePage,
    PrescriptionPage,
    HistoryPage,
    DrugsListPage,
    DrugsListDetalsPage,
    AddDrugPage,
    CreateTestPage,
    PatientListPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserData,
    SplashScreen,
    StatusBar,
    ResourcesProvider,
    GoogleDriveProvider,
    MedXProvider
  ]
})
export class AppModule { }
