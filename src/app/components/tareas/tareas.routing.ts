import { Routes, RouterModule } from '@angular/router';
import { TablaTareasComponent } from './tabla-tareas/tabla-tareas.component';

const routes: Routes = [
  {
    path: '',
    component: TablaTareasComponent
  },
];

export const TareasRoutes = RouterModule.forChild(routes);
