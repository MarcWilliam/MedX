import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import { QueryService } from '../../services/queries.service';
import { QueryValidator } from '../../validators/query';
import { PublishedQueriesPage } from '../published-queries/published-queries';

@Component({
  selector: 'page-new',
  templateUrl: 'new.html'
})
export class NewPage {
  private url = "http://localhost:8064/api/queries";
  queriesForm: FormGroup;

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.queriesForm = this.buildMyForm();
  }

  buildMyForm() {
    return this.formBuilder.group({
      name: [''],
      version: [''],
      description: [''],
      query: ['', Validators.compose([
        /*Validators.pattern(regexValidators.email),*/ ///reqex //import { regexValidators } from '../validators/validator';
        QueryValidator.checkQuery,
        Validators.required
      ])
      ],
      params: this.formBuilder.array([]),
      media: this.formBuilder.group({
        video: '',
        main: '',
        imgs: this.formBuilder.array([])
      })
    });
  }

  createParam(): FormGroup {
    return this.formBuilder.group({
      key: '',
      type: ''
    });
  }

  createImg(): FormGroup {
    return this.formBuilder.group({
      img: ''
    });
  }

  addParam() {
    let params = this.queriesForm.get('params') as FormArray;
    params.push(this.createParam());
  }

  removeParam(index: number) {
    let params = this.queriesForm.get('params') as FormArray;
    params.removeAt(index);
  }

  addImg() {
    let imgs = this.queriesForm.get('media').get('imgs') as FormArray;
    imgs.push(new FormControl(''));
  }

  removeImg(index: number) {
    let imgs = this.queriesForm.get('media').get('imgs') as FormArray;
    imgs.removeAt(index);
  }

  logForm(query) {
    this.httpClient.post(this.url, query)
      .subscribe(
      res => {
        this.okToast();
      },
      error => {
        this.rejectToast();
        console.log(error);
      }
      );
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: `Are you sure you want to publish this query?`,
      message: ``,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            let controls = this.queriesForm.controls;

            let paramsArr = controls['params'].value;
            let paramsObj = {};
            for (let i = 0; i < paramsArr.length; i++) {
              paramsObj[paramsArr[i].key] = paramsArr[i].type;
            }

            this.logForm(new QueryService(
              controls['name'].value,
              controls['version'].value,
              controls['description'].value,
              controls['query'].value,
              paramsObj,
              controls['media'].value
            ));

            //form reset
            this.queriesForm = this.buildMyForm();
            this.navCtrl.setRoot(PublishedQueriesPage);
          }
        },
        {
          text: 'Cancel',
          handler: () => { }
        }
      ]
    });
    confirm.present();
  }

  okToast() {
    let toast = this.toastCtrl.create({
      message: 'Query added successfully',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  rejectToast() {
    let toast = this.toastCtrl.create({
      message: 'Rejected',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

}