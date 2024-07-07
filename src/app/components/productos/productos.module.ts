import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleriaComponent } from './galeria/galeria.component';
import { ProductosRoutes } from './productos.routing';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { ModalProductosComponent } from './modal-productos/modal-productos.component';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ProductosRoutes,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    CardModule,
    ChipModule,
    DialogModule,
    FormsModule

  ],
  declarations: [GaleriaComponent, ModalProductosComponent]
})
export class ProductosModule { }
