import { Injectable } from '@angular/core';
import { IEmpleado } from '../../interfaces/empleado.interface';


@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  private _empleados: IEmpleado[] = [];
  constructor() {
    const empleadosLS = localStorage.getItem('empleados');

    if (empleadosLS) {
      this._empleados = JSON.parse(empleadosLS);
    }
  }

  getEmpleados(): IEmpleado[] {
    return this._empleados;
  }

  getEmpleado(id: number): IEmpleado | undefined {
    return this._empleados.find((empleado) => empleado.idEmpleado === id);
  }

  agregarEmpleado(empleado: IEmpleado) {
    empleado.idEmpleado = this._empleados.length + 1;
    this._empleados.push(empleado);
    this._guardarLS();
  }

  eliminarEmpleado(id: number) {
    const index = this._empleados.findIndex(
      (cliente) => cliente.idEmpleado === id
    );
    this._empleados.splice(index, 1);

    this._guardarLS();
  }

  actualizarEmpleado(empleado: IEmpleado) {
    const index = this._empleados.findIndex(
      (e) => e.idEmpleado === empleado.idEmpleado
    );
    this._empleados[index] = empleado;

    this._guardarLS();
  }

  private _guardarLS() {
    localStorage.setItem('empleados', JSON.stringify(this._empleados));
  }
}
