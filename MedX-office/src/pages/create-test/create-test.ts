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
  testName: string = "";
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

  public write(){
    console.log(this.form);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateTestPage');
  }

  public submit() {
    console.log(this.form);
    this.form.name=this.testName;
    this.form.auther=this.auther;
    this.form.description=this.description;
    this.form.createdAt=new Date();
    this.storage.get("tests").then(data => {
      if (data) {
        
        data.push(this.form);
        this.storage.set("tests", data);
        console.log(data);
      }else{
        let temparr = new Array();
        temparr.push(this.form);
        this.storage.set("tests", temparr);
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
