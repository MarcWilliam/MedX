import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfficeVisitsPage } from './office-visits';

@NgModule({
  declarations: [
    OfficeVisitsPage,
  ],
  imports: [
    IonicPageModule.forChild(OfficeVisitsPage),
  ],
})
export class OfficeVisitsPageModule {}
