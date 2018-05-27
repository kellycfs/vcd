import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { AngularFireAuth } from 'angularfire2/auth';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [LoginFormComponent, LoginComponent],
  exports: [LoginFormComponent, LoginComponent],
  providers: [AngularFireAuth]

})
export class LoginModule { }
