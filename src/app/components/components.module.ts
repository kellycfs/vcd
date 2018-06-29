import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscaComponent } from './busca/busca.component';
import { ProximoseventosComponent } from './proximoseventos/proximoseventos.component';
import { VideosComponent } from './videos/videos.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ListUploadComponent } from './upload/list-upload/list-upload.component';
import { DetailsUploadComponent } from './upload/details-upload/details-upload.component';
import { MenuComponent } from './menu/menu.component';
import { LoginModule } from '../login/login.module';


@NgModule({
  imports: [
    CommonModule, LoginModule
  ],
  declarations: [BuscaComponent, ProximoseventosComponent, VideosComponent,
    RodapeComponent, ListUploadComponent, ListUploadComponent, DetailsUploadComponent, MenuComponent
  ],
  exports: [
    LoginModule, BuscaComponent, ProximoseventosComponent, VideosComponent,
    RodapeComponent, ListUploadComponent, DetailsUploadComponent, MenuComponent

  ]
})
export class ComponentsModule { }
