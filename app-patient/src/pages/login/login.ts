import { Component } from '@angular/core';
import { NavController, MenuController, AlertController, LoadingController, Loading, IonicPage, ModalController, Platform } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { REGISTER_PAGE, PROFILE_PAGE } from '../pages.constants';
import { UserData } from '../../providers/user-data';
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
    this.nav.push(REGISTER_PAGE);
  }

  public async onLogin() {
    /*this.showLoading();
    if (this.platform.is('android')) {
      await this.googleDriveProvider.signIn(false, true);
      let serialized_keystore = (await this.googleDriveProvider.retrieveFileContentsByTitle("ks", true));
      if (serialized_keystore.contents) {
        store.set('ks', serialized_keystore.contents);
        this.userData.login('username');
        this.nav.setRoot(PROVIDERS_PAGE);
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
        this.nav.setRoot(PROVIDERS_PAGE);
      }
      else {
        alert("Wrong associated google account, did you register first ?");
        this.loading.dismiss();
      }
    }*/
    this.userData.login('username');
    this.nav.setRoot(PROFILE_PAGE);
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

  async ionViewDidLoad() {
    // console.log(this.googleDriveProvider);
    // console.log(await this.googleDriveProvider.signIn(false, true));
    // console.log(await this.googleDriveProvider.createFile("test.txt", "IT WORKS!", "text/plain", true));
    // let fileContents = await this.googleDriveProvider.retrieveFileContentsByTitle("test.txt", true);
    // console.log(fileContents);
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