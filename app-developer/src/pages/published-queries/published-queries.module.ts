import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublishedQueriesPage } from './published-queries';

@NgModule({
  declarations: [
    PublishedQueriesPage,
  ],
  imports: [
    IonicPageModule.forChild(PublishedQueriesPage),
  ],
})
export class PublishedQueriesPageModule {}
