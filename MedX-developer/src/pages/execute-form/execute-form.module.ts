import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExecuteFormPage } from './execute-form';

@NgModule({
  declarations: [
    ExecuteFormPage,
  ],
  imports: [
    IonicPageModule.forChild(ExecuteFormPage),
  ],
})
export class ExecuteFormPageModule {}
