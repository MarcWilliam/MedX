import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, PopoverController } from 'ionic-angular';

declare var require: any;
var CATEGORIES = require('../new/categories.json');

@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {
  private categories: any = [];
  private subcategories: any = [];
  private callback: any;
  private selectedCategory = null;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public popoverCtrl: PopoverController
  ) {
    this.categories = CATEGORIES['categories'];
    this.callback = this.navParams.get('callback');
  }

  ionViewDidLoad() {
    this.selectedCategory = this.categories[0];
    this.subcategories = CATEGORIES[this.categories[0]];
  }

  presentPopover(category) {
    this.selectedCategory = category;
    this.subcategories = CATEGORIES[category];
  }

  get(subCategory) {
    this.callback(this.selectedCategory, subCategory);
    this.close();
  }

  close() {
    this.viewCtrl.dismiss();
  }
}
