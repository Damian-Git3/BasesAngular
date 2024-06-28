import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaTareasComponent } from './tabla-tareas/tabla-tareas.component';
import { TareasRoutes } from './tareas.routing';

@NgModule({
  imports: [CommonModule, TareasRoutes],
  declarations: [TablaTareasComponent],
})
export class TareasModule {}
