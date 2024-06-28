import { Routes, RouterModule } from '@angular/router';
import { ListadoImagenesComponent } from './listado-imagenes/listado-imagenes.component';

const routes: Routes = [
  {
    path: '',
    component: ListadoImagenesComponent
  }
];

export const GiphyRoutes = RouterModule.forChild(routes);
