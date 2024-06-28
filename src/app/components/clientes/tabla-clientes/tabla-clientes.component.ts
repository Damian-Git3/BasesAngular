import { Component, OnInit } from '@angular/core';

import { ICliente } from '../../../interfaces/cliente.interface';
import { ClientesService } from '../../../services/clientes/clientes.service';


@Component({
  selector: 'app-tabla-clientes',
  templateUrl: './tabla-clientes.component.html',
  styleUrls: ['./tabla-clientes.component.css'],
})
export class TablaClientesComponent implements OnInit {
  clientes: ICliente[] = [];
  constructor(private clientesService: ClientesService) {
    this.getClientes();
  }

  ngOnInit() {
    console.log('Tabla Clientes');
  }

  getClientes(): ICliente[] | void {
    this.clientes = this.clientesService.getClientes();
  }

  eliminarCliente(id: number) {
    this.clientesService.eliminarCliente(id);
    this.getClientes();
  }
}
