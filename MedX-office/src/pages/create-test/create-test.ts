import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TemplateBuilderProvider } from '../../providers/template-builder/template-builder';
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
   testHtml : string;
   htmlSelectors : Array<any>;
   inputTest : string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams 
    ,public tb : TemplateBuilderProvider
  ) {
    this.htmlSelectors = tb.HtmlElements;
    //tb =  new TemplateBuilderProvider();
    
    console.log(this.htmlSelectors);
    this.testHtml=' <input  type="number"> ';
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateTestPage');
  }

  addElement(element : any){
    console.log(element)
  }

}
