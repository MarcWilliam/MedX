import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseTemplatePage } from './choose-template';

@NgModule({
  declarations: [
    ChooseTemplatePage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseTemplatePage),
  ],
})
export class ChooseTemplatePageModule {}
