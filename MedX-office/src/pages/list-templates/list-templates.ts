import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TemplatePage} from '../template/template';
import { Storage } from '@ionic/storage';
import { testForms } from '../../interfaces/test-form';
/**
 * Generated class for the ListTemplatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-templates',
  templateUrl: 'list-templates.html',
})
export class ListTemplatesPage {

  public templateTests : Array<{
    name : any ,
    descr : any,
    users : number,
    fav : boolean,
  }>; 
  public templates :Array<testForms>;
  public viewList : any;
  public searchterm :any ="";
  public Ready=false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage : Storage) {
    this.templateTests = [{
      name :  "CBC",
      descr :  " Complete Blood Count",
      users :  11266,
      fav :    true
    },
    {
      name :  "Fibrinogen",
      descr :  "An important contributor to blood clotting",
      users :  9054,
      fav :    true
    }, 
    {
      name :  "H A1C",
      descr :  "measures blood sugar control over the last two to three months",
      users :  7648,
      fav :    true
    }, 
    {
      name :  " DHEA",
      descr :  "Dehydroepiandrosterone a hormone produced by the adrenal glands, is a precursor to the sex hormones estrogen and testosterone",
      users :  5996,
      fav :    true
    }, 
    {
      name :  " TSH",
      descr :  " thyroid stimulating hormone (TSH) controls thyroid hormone secretion in the thyroid",
      users :  2364,
      fav :    false
    },
  ]
  //this.viewList = this.templateTests;
  this.storage.get("tests").then(data=>{
    if(data){
      this.templates= data;
      this.viewList = this.templates;
      console.log(this.viewList);
      this.Ready =true;
    }
  },err=>{
    console.log(err);
  });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ListTemplatesPage');
  }
  openPage(test){
    this.navCtrl.push(TemplatePage ,{Test : test});
    console.log("Opened");
  }

  search(){
    if(this.Ready){
    this.viewList = this.filter(this.templates,this.searchterm);
    }
  }

  
  public filter(arr : Array<any>,searchTerm :string =""){
    if(searchTerm ==""){
      return arr;
    }else{
    return arr.filter((item) => {
        return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });     
    }
}
}
