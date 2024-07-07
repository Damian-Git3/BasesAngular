import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { EmpleadosRoutes } from './empleados.routing';
import { ModalEmpleadosComponent } from './modal-empleados/modal-empleados.component';
import { TablaEmpleadosComponent } from './tabla-empleados/tabla-empleados.component';

@NgModule({
  imports: [
    CommonModule,
    EmpleadosRoutes,
    TableModule,
    CardModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    RadioButtonModule,
    CalendarModule,
    FormsModule,
  ],
  declarations: [TablaEmpleadosComponent, ModalEmpleadosComponent],
})
export class EmpleadosModule {}
