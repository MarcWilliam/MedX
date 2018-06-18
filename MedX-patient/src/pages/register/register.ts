import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage, MenuController, LoadingController, Loading } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ImagePicker } from '@ionic-native/image-picker';
import { Base64 } from '@ionic-native/base64';

import { PROVIDERS_PAGE } from '../pages.constants';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  registerForm: FormGroup;
  isReadyToRegister: boolean;
  loading: Loading;
  createSuccess = false;
  photo64: String = 'assets/img/blank-avatar.jpg';


  constructor(
    private nav: NavController,
    private formBuilder: FormBuilder,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    public menu: MenuController,
    private imagePicker: ImagePicker,
    private base64: Base64
  ) {

    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      address: ['', [Validators.required]],
      maritalStatus: ['', [Validators.required]],
      photo: ['', [Validators.required]],
      contact: formBuilder.group({
        relationship: ['', Validators.required],
        name: ['', Validators.required],
        telecom: formBuilder.group({
          phone: ['', Validators.required],
          email: ['', Validators.required]
        }),
        address: ['', Validators.required],
        gender: ['', Validators.required],
        organization: ['', Validators.required],
        period: formBuilder.group({
          from: ['', Validators.required],
          to: ['', Validators.required]
        }),
      }),
      communication: formBuilder.group({
        language: ['', Validators.required],
        preferred: ['', Validators.required],
      })
    });

    this.registerForm.valueChanges.subscribe(() => {
      this.isReadyToRegister = this.registerForm.valid;
    });

  }

  getPhoto() {
    const OPTIONS = {
      maximumImagesCount: 1
    };
    this.imagePicker.getPictures(OPTIONS).then((photos64) => {
      for (let photo64 of photos64) {
        if (photos64) {
          this.photo64 = photo64;

          this.base64.encodeFile(photo64).then((base64File: string) => {
            this.registerForm.controls['photo'].setValue(base64File);
          }, (err) => {
            console.log(err);
          });
        }
      }
    }, (err) => { });
  }

  public onRegister() {
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

  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            if (this.createSuccess) {
              this.nav.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
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