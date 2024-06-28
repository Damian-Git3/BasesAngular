import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ClientesRoutes } from './clientes.routing';
import { TableModule } from 'primeng/table';
import { ModalClienteComponent } from './modal-cliente/modal-cliente.component';
import { TablaClientesComponent } from './tabla-clientes/tabla-clientes.component';

@NgModule({
  declarations: [
    TablaClientesComponent,
    ModalClienteComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutes,
    FormsModule,
    CardModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    TableModule
  ],
})
export class ClientesModule { }
