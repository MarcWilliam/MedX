import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { ListTemplatesPage } from '../pages/list-templates/list-templates';
import { ChooseTemplatePage} from '../pages/choose-template/choose-template';
import {TemplatePage } from '../pages/template/template';
import {ProfilePage} from '../pages/profile/profile'
import { PrescriptionPage } from '../pages/prescription/prescription';
import {HistoryPage} from '../pages/history/history';
import {DrugsListPage} from '../pages/drugs-list/drugs-list';
import {DrugsListDetalsPage} from '../pages/drugs-list-detals/drugs-list-detals';
import {AddDrugPage} from '../pages/add-drug/add-drug';
import {CreateTestPage} from '../pages/create-test/create-test';

import { UserData } from '../providers/user-data';


@NgModule({
  declarations: [
    ConferenceApp,
    LoginPage,
    SignupPage,
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
    CreateTestPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(ConferenceApp, {}, {
      links: [
        { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: SignupPage, name: 'SignupPage', segment: 'signup' },
        { component: ListTemplatesPage, name: 'ListTemplatesPage', segment: 'ListTemplates' },
        { component: ChooseTemplatePage , name: 'ChooseTemplatePage' , segment: 'ChooseTemplatePage'},
        { component: TemplatePage , name: 'TemplatePage' ,segment: 'TemplatePage'},
        { component: ProfilePage , name: 'ProfilePage' , segment: 'ProfilePage'},
        { component: PrescriptionPage ,name: 'PrescriptionPage' ,segment:'PrescriptionPage'},
        { component: HistoryPage ,name: 'HistoryPage' , segment:'HistoryPage'},
        { component:DrugsListPage ,name:'DrugsListPage',segment: 'DrugsListPage'},
        { component:DrugsListDetalsPage ,name:'Drugs Detals',segment:'DrugsListDetalsPage'},
        { component:AddDrugPage , name:'AddDrugPage',segment:'AddDrugPage'},
        { component:CreateTestPage , name:"CreateTestPage" , segment:'CreateTestPage'}
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    LoginPage,
    SignupPage,
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
    CreateTestPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserData,
    InAppBrowser,
    SplashScreen,
  ]
})
export class AppModule { }
