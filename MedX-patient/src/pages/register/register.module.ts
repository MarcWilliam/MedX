import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { Base64 } from '@ionic-native/base64';

import { RegisterPage } from './register';

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
  ],
  providers: [
    ImagePicker,
    Base64
  ]
})
export class RegisterPageModule { }
