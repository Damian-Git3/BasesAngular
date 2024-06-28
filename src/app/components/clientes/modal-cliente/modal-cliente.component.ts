import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ICliente } from '../../../interfaces/cliente.interface';
import { ClientesService } from '../../../services/clientes/clientes.service';


@Component({
  selector: 'app-modal-cliente',
  templateUrl: './modal-cliente.component.html',
  styleUrls: ['./modal-cliente.component.css'],
})
export class ModalClienteComponent implements OnInit {
  @Output() reload = new EventEmitter<boolean>();
  titulo: string = 'Cliente';
  btnLabel: string = 'GUARDAR';
  display: boolean = false;
  actualizar: boolean = false;
  cliente: ICliente = {} as ICliente;

  constructor(private clientesService: ClientesService) {}

  ngOnInit() {
    console.log('Modal Clientes');
  }

  show(idCliente?: number) {
    if (idCliente) {
      this.actualizar = true;
      this.titulo = 'Editar Cliente';
      this.btnLabel = 'ACTUALIZAR';
      this.cliente =
        this.clientesService.getCliente(idCliente) ?? ({} as ICliente);
    } else {
      this.actualizar = false;
      this.titulo = 'Nuevo Cliente';
      this.btnLabel = 'GUARDAR';
      this.cliente = {} as ICliente;
    }
    this.display = true;
  }

  hide() {
    this.display = false;
  }

  guardarCliente() {
    this.clientesService.agregarCliente(this.cliente);
    this.reload.emit(true);
    this.hide();
  }

  actualizarCliente() {
    this.clientesService.actualizarCliente(this.cliente);
    this.reload.emit(true);
    this.hide();
  }
}
