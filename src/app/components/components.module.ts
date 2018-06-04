import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscaComponent } from './busca/busca.component';
import { ProximoseventosComponent } from './proximoseventos/proximoseventos.component';
import { VideosComponent } from './videos/videos.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ListUploadComponent } from './upload/list-upload/list-upload.component';
import { DetailsUploadComponent } from './upload/details-upload/details-upload.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BuscaComponent, ProximoseventosComponent, VideosComponent,
    RodapeComponent, ListUploadComponent, ListUploadComponent, DetailsUploadComponent
  ],
  exports: [
    BuscaComponent, ProximoseventosComponent, VideosComponent, RodapeComponent, ListUploadComponent, DetailsUploadComponent

  ]
})
export class ComponentsModule { }
