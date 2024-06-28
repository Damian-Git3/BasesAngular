import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoImagenesComponent } from './listado-imagenes/listado-imagenes.component';
import { GiphyRoutes } from './giphy.routing';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [ListadoImagenesComponent],
  imports: [CommonModule, GiphyRoutes, ButtonModule],
})
export class GiphyModule {}
