import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaTareasComponent } from './tabla-tareas/tabla-tareas.component';
import { TareasRoutes } from './tareas.routing';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ModalTareasComponent } from './modal-tareas/modal-tareas.component';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, TareasRoutes, TableModule, ButtonModule, CardModule, DialogModule, FormsModule],
  declarations: [TablaTareasComponent, ModalTareasComponent],
})
export class TareasModule {}
