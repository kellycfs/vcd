import { LoginComponent } from './login/login.component';
import { EscolasComponent } from './pages/escolas/escolas.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { AppComponent } from './app.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { LoginFormComponent } from './login/login-form/login-form.component';
import { ProfessoresComponent } from './pages/professores/professores.component';

const APP_ROUTES: Routes = [
    { path: '', component: AppComponent },
{ path: 'login', component: LoginComponent },
{ path: 'escolas', component: EscolasComponent },
{ path: 'professores', component: ProfessoresComponent },
{ path: 'eventos', component: EventosComponent },
];

@NgModule({
imports: [RouterModule.forRoot(APP_ROUTES)],
exports: [RouterModule],
providers: [{provide: APP_BASE_HREF, useValue: '/'}]
})
export class AppRoutingModule { }
