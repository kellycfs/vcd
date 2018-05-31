import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscaComponent } from './busca/busca.component';
import { ProximoseventosComponent } from './proximoseventos/proximoseventos.component';
import { VideosComponent } from './videos/videos.component';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BuscaComponent, ProximoseventosComponent, VideosComponent, RodapeComponent],
  exports: [
    BuscaComponent, ProximoseventosComponent, VideosComponent, RodapeComponent
  ]
})
export class ComponentsModule { }
