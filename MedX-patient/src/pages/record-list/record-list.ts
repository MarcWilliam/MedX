import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

/**
 * Generated class for the RecordListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export interface MockRecord {
  title: string;
  selected: boolean;
}

@IonicPage()
@Component({
  selector: 'page-record-list',
  templateUrl: 'record-list.html',
})
export class RecordListPage {
  selectedAll: boolean;
  office: any;
  searchTerm: string = '';
  searchControl: FormControl;
  searching: any = false;

  records: any[] = [
    { title: "test 1", date: new Date(), doctor: "Dr. John Smith", selected: false },
    { title: "test 2", date: new Date(), doctor: "Dr. John Smith", selected: false },
    { title: "test 3", date: new Date(), doctor: "Dr. John Smith", selected: false },
    { title: "test 4", date: new Date(), doctor: "Dr. John Smith", selected: false },
    { title: "test 5", date: new Date(), doctor: "Dr. John Smith", selected: false },
    { title: "test 6", date: new Date(), doctor: "Dr. John Smith", selected: false },
    { title: "test 7", date: new Date(), doctor: "Dr. John Smith", selected: false },
    { title: "test 8", date: new Date(), doctor: "Dr. John Smith", selected: false },
    { title: "test 9", date: new Date(), doctor: "Dr. John Smith", selected: false },
    { title: "test 10", date: new Date(), doctor: "Dr. John Smith", selected: false },
    { title: "test 11", date: new Date(), doctor: "Dr. John Smith", selected: false },
    { title: "test 12", date: new Date(), doctor: "Dr. John Smith", selected: false },
    { title: "test 13", date: new Date(), doctor: "Dr. John Smith", selected: false },
    { title: "test 14", date: new Date(), doctor: "Dr. John Smith", selected: false },
    { title: "test 15", date: new Date(), doctor: "Dr. John Smith", selected: false },
    { title: "test 16", date: new Date(), doctor: "Dr. John Smith", selected: false },
    { title: "test 17", date: new Date(), doctor: "Dr. John Smith", selected: false }
  ];

  filteredRecords: MockRecord[] = this.records.slice(0, this.records.length);

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
  ) {
    this.searchControl = new FormControl();
    this.office = this.navParams.get("office");
  }

  onGrantAccess() {
    if (confirm(`Are you sure you want give ${this.office} access to these records.`)) {
      this.dismiss(this.getSelectedRecords());
    }
  }

  // TODO: Move to data provider
  filterRecords(searchTerm?: String) {
    // return selected/checked records of the filtered list
    if (searchTerm == null) {
      return this.filteredRecords.filter((record) => {
        return record.selected;
      })
    }
    // Search bar is empty, return the whole array
    else if (searchTerm.trim() == '') {
      return this.records.slice(0, this.records.length)
    }
    // filter by keyWord/searchTerm
    else if (typeof searchTerm === 'string' || searchTerm instanceof String) {
      return this.records.filter((record) => {
        return record.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
      })
    }
  }

  onSearchInput() {
    this.searching = true;
  }

  setFilteredRecords() {
    this.filteredRecords = this.filterRecords(this.searchTerm);
  }

  getSelectedRecords() {
    return this.filterRecords();
  }

  selectAll() {
    for (let record of this.filteredRecords) {
      record.selected = this.selectedAll;
    }
  }

  checkIfAllSelected() {
    this.selectedAll = this.filteredRecords.every(record => {
      return record.selected == true;
    })
  }

  dismiss(content?: string | MockRecord[]) {
    this.viewCtrl.dismiss(content);
  }

  ionViewDidLoad() {
    this.selectedAll = true;
    this.selectAll();

    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
      this.searchTerm = search;
      this.searching = false;

      this.setFilteredRecords();

      this.selectedAll = true;
      this.selectAll();

    });


  }

}
