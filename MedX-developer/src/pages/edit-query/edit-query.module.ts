import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditQueryPage } from './edit-query';

@NgModule({
  declarations: [
    EditQueryPage,
  ],
  imports: [
    IonicPageModule.forChild(EditQueryPage),
  ],
})
export class EditQueryPageModule {}
