import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DrugsListDetalsPage } from './drugs-list-detals';

@NgModule({
  declarations: [
    DrugsListDetalsPage,
  ],
  imports: [
    IonicPageModule.forChild(DrugsListDetalsPage),
  ],
})
export class DrugsListDetalsPageModule {}
