import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListTemplatesPage } from './list-templates';

@NgModule({
  declarations: [
    ListTemplatesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListTemplatesPage),
  ],
})
export class ListTemplatesPageModule {}
