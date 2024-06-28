import { Routes } from '@angular/router';
import { ClientesModule } from './components/clientes/clientes.module';
import { EmpleadosModule } from './components/empleados/empleados.module';
import { GiphyModule } from './components/giphy/giphy.module';
import { TareasModule } from './components/tareas/tareas.module';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'clientes',
    loadChildren: () => ClientesModule,
  },
  {
    path: 'empleados',
    loadChildren: () => EmpleadosModule
  },
  {
    path: 'giphy',
    loadChildren: () => GiphyModule
  },
  {
    path: 'tareas',
    loadChildren: () => TareasModule
  }
];
