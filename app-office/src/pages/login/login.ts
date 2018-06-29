import { Component } from '@angular/core';
import { NavController, MenuController, AlertController, LoadingController, Loading, IonicPage, ModalController, Platform } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterPage } from '../register/register';
import { PatientListPage } from '../patient-list/patient-list';
import { UserData } from '../../providers/user-data';
import { MedXProvider } from '../../providers/medx';
import { GoogleDriveProvider } from '../../providers/google-drive';
import * as store from 'store';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup;
  isReadyToLogin: boolean;
  loading: Loading;
  loginCredentials = { email: '', password: '' };

  constructor(
    private platform: Platform,
    private nav: NavController,
    private formBuilder: FormBuilder,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public menu: MenuController,
    public userData: UserData,
    public medXProvider: MedXProvider,
    public googleDriveProvider: GoogleDriveProvider
  ) {

    this.loginForm = this.formBuilder.group({
      password: ['', [Validators.required]]
    });

    this.loginForm.valueChanges.subscribe(() => {
      this.isReadyToLogin = this.loginForm.valid;
    });
  }

  public onCreateAccount() {
    this.nav.push(RegisterPage);
  }

  public async onLogin() {
    this.showLoading();
    if (this.platform.is('android')) {
      await this.googleDriveProvider.signIn(false, true);
      let serialized_keystore = (await this.googleDriveProvider.retrieveFileContentsByTitle("ks", true));
      if (serialized_keystore.contents) {
        store.set('ks', serialized_keystore.contents);
        this.userData.login('username');
        this.nav.setRoot(PatientListPage);
      }
      else {
        alert("Wrong associated google account, did you register first ?");
        this.loading.dismiss();
      }
    }
    else {
      let serialized_keystore = store.get('ks');
      if (serialized_keystore) {
        this.userData.login('username');
        this.nav.setRoot(PatientListPage);
      }
      else {
        alert("Wrong associated google account, did you register first ?");
        this.loading.dismiss();
      }
    }
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewWillEnter() {
    this.menu.enable(false);
    this.menu.swipeEnable(false);

    store.remove('ks');
    this.userData.logout();
  }

  ionViewWillLeave() {
    this.menu.enable(true);
    this.menu.swipeEnable(true);
  }


}