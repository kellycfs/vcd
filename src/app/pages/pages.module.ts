import { LoginService } from './../services/login.service';
import { EventoService } from './../services/evento.service';
import { FormsModule } from '@angular/forms';
import { CadastrarEventoComponent } from './cadastrar-evento/cadastrar-evento.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { EventosComponent } from './eventos/eventos.component';
import { ProfessoresComponent } from './professores/professores.component';
import { EscolasComponent } from './escolas/escolas.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule
  ],
  declarations: [HomeComponent, CadastrarEventoComponent, EventosComponent, ProfessoresComponent, EscolasComponent],
  exports: [HomeComponent, CadastrarEventoComponent, EventosComponent, ProfessoresComponent, EscolasComponent],
  providers: [EventoService, LoginService]
})
export class PagesModule { }
