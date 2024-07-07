import { Routes, RouterModule } from '@angular/router';
import { GaleriaComponent } from './galeria/galeria.component';

const routes: Routes = [
  {
    path: '',
    component: GaleriaComponent,
   },
];

export const ProductosRoutes = RouterModule.forChild(routes);
