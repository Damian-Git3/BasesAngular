import { Injectable } from '@angular/core';
import { ICliente } from '../../interfaces/cliente.interface';


@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private _clientes: ICliente[] = [];
  constructor() {
    //Obtener lista de local storage
    const clientesLS = localStorage.getItem('clientes');

    if (clientesLS) {
      this._clientes = JSON.parse(clientesLS);
    }
  }

  getClientes(): ICliente[] {
    return this._clientes;
  }

  getCliente(id: number): ICliente | undefined {
    return this._clientes.find((cliente) => cliente.idCliente === id);
  }

  agregarCliente(cliente: ICliente) {
    cliente.idCliente = this._clientes.length + 1;
    this._clientes.push(cliente);

    //Guardar lista en local storage
    this._guardarLS();
  }

  eliminarCliente(id: number) {
    const index = this._clientes.findIndex(
      (cliente) => cliente.idCliente === id
    );
    this._clientes.splice(index, 1);

    //Guardar lista en local storage
    this._guardarLS();
  }

  actualizarCliente(cliente: ICliente) {
    const index = this._clientes.findIndex(
      (c) => c.idCliente === cliente.idCliente
    );
    this._clientes[index] = cliente;

    //Guardar lista en local storage
    this._guardarLS();
  }

  private _guardarLS() {
    localStorage.setItem('clientes', JSON.stringify(this._clientes));
  }
}
