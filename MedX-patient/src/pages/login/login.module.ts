import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { RegisterPageModule } from '../register/register.module';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    RegisterPageModule,
    IonicPageModule.forChild(LoginPage),
  ],
  exports: [
    LoginPage
  ]
})
export class LoginPageModule { }
