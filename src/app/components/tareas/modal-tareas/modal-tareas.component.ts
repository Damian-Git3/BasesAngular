import { Component, EventEmitter, Output } from '@angular/core';
import { ITarea } from '../../../interfaces/tarea.interface';
import { TareasService } from '../../../services/tareas/tareas.service';

@Component({
  selector: 'app-modal-tareas',
  templateUrl: './modal-tareas.component.html',
  styleUrl: './modal-tareas.component.css',
})
export class ModalTareasComponent {
  @Output() reload = new EventEmitter<boolean>();
  titulo: string = 'Tareas';
  btnLabel: string = 'GUARDAR';
  display: boolean = false;
  actualizar: boolean = false;
  tarea: ITarea = {} as ITarea;

  constructor(
    private tareasService: TareasService
  ) {
    console.log('Modal Tareas');
  }

  show(tarea?: ITarea) {
    this.tarea = {} as ITarea;
    this.display = false;
    this.actualizar = false;
    this.tarea = {} as ITarea;
    this.btnLabel = 'GUARDAR';
    this.titulo = 'Nueva tarea';
    if (tarea) {
      this.actualizar = true;
      this.titulo = 'Editar tarea';
      this.btnLabel = 'Actualizar';
      this.tarea = tarea;
    }

    this.display = true;
  }

  guardar() {
    this.tareasService.insert(this.tarea).subscribe({
      next: () => {
        this.display = false;
        this.reload.emit(true);
      },
    });
  }

  actualizarTarea() {
    this.tareasService.update(this.tarea).subscribe({
      next: () => {
        this.display = false;
        this.reload.emit(true);
      },
    });
  }

  hide() {
    this.tarea = {} as ITarea;
    this.display = false;
  }
}
