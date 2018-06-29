import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddDrugPage } from './add-drug';

@NgModule({
  declarations: [
    AddDrugPage,
  ],
  imports: [
    IonicPageModule.forChild(AddDrugPage),
  ],
})
export class AddDrugPageModule {}
