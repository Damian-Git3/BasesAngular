import { Routes, RouterModule } from '@angular/router';
import { TablaClientesComponent } from './tabla-clientes/tabla-clientes.component';

const routes: Routes = [{ path: '', component: TablaClientesComponent }];

export const ClientesRoutes = RouterModule.forChild(routes);
