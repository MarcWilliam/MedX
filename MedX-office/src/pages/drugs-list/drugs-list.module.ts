import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DrugsListPage } from './drugs-list';

@NgModule({
  declarations: [
    DrugsListPage,
  ],
  imports: [
    IonicPageModule.forChild(DrugsListPage),
  ],
})
export class DrugsListPageModule {}
