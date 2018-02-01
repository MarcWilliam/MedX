import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DemographicsPage } from './demographics';

@NgModule({
  declarations: [
    DemographicsPage,
  ],
  imports: [
    IonicPageModule.forChild(DemographicsPage),
  ],
})
export class DemographicsPageModule {}
