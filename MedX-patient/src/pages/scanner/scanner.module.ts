import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QRScanner } from '@ionic-native/qr-scanner';

import { ScannerPage } from './scanner';

@NgModule({
  declarations: [
    ScannerPage,
  ],
  imports: [
    IonicPageModule.forChild(ScannerPage),
  ],
  providers: [
    QRScanner
  ]
})
export class ScannerPageModule {}
