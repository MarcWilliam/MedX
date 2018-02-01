import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaboratoryPage } from './laboratory';

@NgModule({
  declarations: [
    LaboratoryPage,
  ],
  imports: [
    IonicPageModule.forChild(LaboratoryPage),
  ],
})
export class LaboratoryPageModule {}
