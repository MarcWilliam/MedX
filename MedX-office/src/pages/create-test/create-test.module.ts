import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateTestPage } from './create-test';

@NgModule({
  declarations: [
    CreateTestPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateTestPage),
  ],
})
export class CreateTestPageModule {}
