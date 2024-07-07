import { Component, OnInit } from '@angular/core';
import { ITarea } from '../../../interfaces/tarea.interface';
import { TareasService } from '../../../services/tareas/tareas.service';

@Component({
  selector: 'app-tabla-tareas',
  templateUrl: './tabla-tareas.component.html',
  styleUrls: ['./tabla-tareas.component.css'],
})
export class TablaTareasComponent implements OnInit {
  tareas: ITarea[] = [];
  constructor(private tareasSerice: TareasService) {}

  ngOnInit() {
    this.listarTareas();
    console.log('Componente de tabla de tareas');
  }

  public listarTareas() {
    this.tareasSerice.getList().subscribe({
      next: (data) => {
        this.tareas = data;
      },
    });
  }

  eliminarTarea(idTarea: number) {
    this.tareasSerice.delete(idTarea).subscribe({
      next: () => {
        this.listarTareas();
      },
    });
  }
}
