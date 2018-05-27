import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { LoginFormComponent } from './login/login-form/login-form.component';

const APP_ROUTES: Routes = [
{ path: '', component: LoginFormComponent }
];

@NgModule({
imports: [RouterModule.forRoot(APP_ROUTES)],
exports: [RouterModule],
providers: [{provide: APP_BASE_HREF, useValue: '/'}]
})
export class AppRoutingModule { }
