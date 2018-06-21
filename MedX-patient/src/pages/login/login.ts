import { Component } from '@angular/core';
import { NavController, MenuController, AlertController, LoadingController, Loading, IonicPage, ModalController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { REGISTER_PAGE, PROVIDERS_PAGE } from '../pages.constants';
import { MedXProvider } from '../../providers/medx';
import { GoogleDriveProvider } from '../../providers/google-drive';

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
    private nav: NavController,
    private formBuilder: FormBuilder,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public menu: MenuController,
    public googleDriveProvider: GoogleDriveProvider,
    public medXProvider: MedXProvider
  ) {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    this.loginForm.valueChanges.subscribe(() => {
      this.isReadyToLogin = this.loginForm.valid;
    });
  }

  public onCreateAccount() {
    this.nav.push(REGISTER_PAGE);
  }

  public onLogin() {
    this.showLoading();
    this.nav.setRoot(PROVIDERS_PAGE);
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
    let medX = await this.medXProvider.getInstance();
    console.log(medX);
    console.log(this.googleDriveProvider);
    // console.log(await this.googleDriveProvider.signIn(false, true));
    // console.log(await this.googleDriveProvider.createFile("test.txt", "IT WORKS!", "text/plain", true));
    // console.log(await this.googleDriveProvider.retrieveFileContentsByTitle("test.txt", true));
  }

  ionViewWillEnter() {
    this.menu.enable(false);
    this.menu.swipeEnable(false);
  }

  ionViewWillLeave() {
    this.menu.enable(true);
    this.menu.swipeEnable(true);
  }


}