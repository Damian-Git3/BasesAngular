import { Component, EventEmitter, Output } from '@angular/core';
import { IEmpleado } from '../../../interfaces/empleado.interface';
import { EmpleadosService } from '../../../services/empleados/empleados.service';

@Component({
  selector: 'app-modal-empleados',
  templateUrl: './modal-empleados.component.html',
  styleUrl: './modal-empleados.component.css',
})
export class ModalEmpleadosComponent {
  @Output() reload = new EventEmitter<boolean>();
  titulo: string = 'Empleado';
  btnLabel: string = 'GUARDAR';
  display: boolean = false;
  actualizar: boolean = false;
  opciones: any[] = [
    { nombre: 'HOMBRE', valor: 'H' },
    { nombre: 'MUJER', valor: 'M' },
  ];

  empleado: IEmpleado = {} as IEmpleado;

  constructor(private empleadosService: EmpleadosService) {
    console.log('Modal Empleados');

   }

  ngOnInit(): void {
    console.log('Modal Empleados');
  }

  show(idEmpleado?: number) {
    if (idEmpleado) {
      this.actualizar = true;
      this.titulo = 'Editar empleado';
      this.btnLabel = 'Actualizar';
      this.empleado =
        this.empleadosService.getEmpleado(idEmpleado) ?? ({} as IEmpleado);
      console.log(this.empleado);
    } else {
      this.actualizar = false;
      this.titulo = 'Nuevo empleado';
      this.btnLabel = 'GUARDAR';
      this.empleado = {} as IEmpleado;
    }
    this.display = true;
  }

  hide() {
    this.display = false;
  }

  guardar() {
    this.empleadosService.agregarEmpleado(this.empleado);
    this.reload.emit(true);
    this.hide();
  }

  actualizarEmpleado() {
    this.empleadosService.actualizarEmpleado(this.empleado);
    this.reload.emit(true);
    this.hide();
  }
}
