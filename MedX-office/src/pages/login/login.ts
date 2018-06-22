import { Component } from '@angular/core';
import { NavController, MenuController, AlertController, LoadingController, Loading, IonicPage, ModalController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterPage } from '../register/register';
import { PatientListPage } from '../patient-list/patient-list';
import { MedXProvider } from '../../providers/medx';

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
    this.nav.push(RegisterPage);
  }

  public onLogin() {
    this.showLoading();
    this.nav.setRoot(PatientListPage);
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
    // let result = await medX.KeystoreFactory.create();
    // console.log(result);
    // console.log(this.googleDriveProvider);
    // console.log(await this.googleDriveProvider.signIn(false, true));
    // console.log(await this.googleDriveProvider.createFile("test.txt", "IT WORKS!", "text/plain", true));
    // let fileContents = await this.googleDriveProvider.retrieveFileContentsByTitle("test.txt", true);
    // console.log(fileContents);
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