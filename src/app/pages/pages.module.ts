import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap/accordion/accordion.module';
import { FileUploadService } from './../services/file-upload.service';
import { LoginService } from './../services/login.service';
import { EventoService } from './../services/evento.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastrarEventoComponent } from './cadastrar-evento/cadastrar-evento.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { EventosComponent } from './eventos/eventos.component';
import { ProfessoresComponent } from './professores/professores.component';
import { EscolasComponent } from './escolas/escolas.component';
import { CadastroEventoComponent } from './cadastro-evento/cadastro-evento.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormUploadComponent } from './form-upload/form-upload.component';
import { ContatoComponent } from './contato/contato.component';
import {MultiSelectModule} from 'primeng/multiselect';
import {InputMaskModule} from 'primeng/inputmask';
import {CalendarModule} from 'primeng/calendar';


@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    MultiSelectModule,
    InputMaskModule,
    CalendarModule,
    NgbModule
  ],
  declarations: [HomeComponent, CadastrarEventoComponent, EventosComponent, ProfessoresComponent, EscolasComponent,
    CadastroEventoComponent,
    FormUploadComponent,
    ContatoComponent],
  exports: [HomeComponent, CadastrarEventoComponent, EventosComponent, ProfessoresComponent, EscolasComponent, CadastroEventoComponent],
  providers: [EventoService, LoginService, FileUploadService]
})
export class PagesModule { }
