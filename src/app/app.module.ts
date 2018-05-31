import { AngularFireDatabase } from 'angularfire2/database';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { AngularFireAuth } from 'angularfire2/auth';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FirebaseConfig } from './../environments/firebase.config';
import { AngularFireModule } from 'angularfire2/index';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LoginModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    PagesModule,
    ComponentsModule
  ],
  exports: [PagesModule, ComponentsModule],
  providers: [AngularFireModule, AngularFireDatabase, AngularFireAuth, PagesModule, ComponentsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
