import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QueryModalPage } from './query-modal';

@NgModule({
  declarations: [
    QueryModalPage,
  ],
  imports: [
    IonicPageModule.forChild(QueryModalPage),
  ],
})
export class QueryModalPageModule {}
