import { Component } from '@angular/core';
import { IEmpleado } from '../../../interfaces/empleado.interface';
import { EmpleadosService } from '../../../services/empleados/empleados.service';

@Component({
  selector: 'app-tabla-empleados',
  templateUrl: './tabla-empleados.component.html',
  styleUrl: './tabla-empleados.component.css',
})
export class TablaEmpleadosComponent {
  empleados: IEmpleado[] = [];
  constructor(private empleadosService: EmpleadosService) {
    this.getEmpleados();
  }

  ngOnInit(): void {
    console.log('Tabla Empleados');
  }

  getEmpleados(): IEmpleado[] | void {
    this.empleados = this.empleadosService.getEmpleados();
  }

  eliminarEmpleado(id: number) {
    this.empleadosService.eliminarEmpleado(id);
    this.getEmpleados();
  }
}
