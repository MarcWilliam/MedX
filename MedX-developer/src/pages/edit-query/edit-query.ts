import { Component } from '@angular/core';
import { NavController, AlertController, ToastController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import { QueryService } from '../../services/queries.service';
import { QueryValidator } from '../../validators/query';
import { PublishedQueriesPage } from '../published-queries/published-queries';

@IonicPage()
@Component({
  selector: 'page-edit-query',
  templateUrl: 'edit-query.html',
})
export class EditQueryPage {
  private url = "http://localhost:8064/api/queries";
  queriesForm: FormGroup;
  query: any;

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    public navParams: NavParams,
  ) { 
    this.query = this.navParams.get("query");
  }

  ngOnInit() {
    this.queriesForm = this.buildMyForm();
    for (var key in this.query.params){
      if(this.query.params.hasOwnProperty){
        this.addParam(key, this.query.params[key]);
      }
    }
  }

  buildMyForm() {
    return this.formBuilder.group({
      name: [this.query.name],
      version: [this.query.version],
      description: [this.query.description],
      query: [this.query.query, Validators.compose([
        /*Validators.pattern(regexValidators.email),*/ ///reqex //import { regexValidators } from '../validators/validator';
        QueryValidator.checkQuery,
        Validators.required
      ])
      ],
      params: this.formBuilder.array([]),
      media: this.formBuilder.group({
        video: this.query.media.video,
        main: this.query.media.main,
        imgs: this.formBuilder.array(this.query.media.imgs)
      })
    });
  }

  createParam(key = '', type = ''): FormGroup {
    return this.formBuilder.group({
      key: key,
      type: type
    });
  }

  createImg(): FormGroup {
    return this.formBuilder.group({
      img: ''
    });
  }

  addParam(key = '', type = '') {
    let params = this.queriesForm.get('params') as FormArray;
    params.push(this.createParam(key, type));
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
    this.httpClient.put(this.url+`/${this.query.id}`, query)
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
              controls['category'].value,
              controls['subCategory'].value,
              controls['media'].value
            ));

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
