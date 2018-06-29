import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecordListPage } from './record-list';

@NgModule({
  declarations: [
    RecordListPage,
  ],
  imports: [
    IonicPageModule.forChild(RecordListPage),
  ],
})
export class RecordListPageModule {}
