import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { testForms, formComponent } from '../../interfaces/test-form';
//mport { NgForm } from '@angular/forms';

/**
 * Generated class for the CreateTestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-test',
  templateUrl: 'create-test.html',
})
export class CreateTestPage {
  auther: string = "";
  description: string = "";
  creationDate: Date = new Date();
  testName: String = "";
  numberOfComponents: number = 0;
  form: testForms;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage
  ) {
    this.testName = "";
    this.form = new testForms();



    console.log();


  }

  public expand() {
    if (this.numberOfComponents > 0) {
      this.form.components = Array.from({ length: this.numberOfComponents }, () => new formComponent());

      console.log(this.form.components);
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateTestPage');
  }

  public submit() {
    console.log(this.form);
    this.storage.get("tests").then(data => {
      if (data) {
        let tempArr = new Array();
        tempArr = data.concat(this.form);
        this.storage.set("test", tempArr);
        console.log(tempArr);
      }
    }, err => {
      console.log(err);
    })
  }

  addElement(element: any) {
    console.log(element)
  }

  public trackByIndex(index: number) {
    return index;
  }

}
