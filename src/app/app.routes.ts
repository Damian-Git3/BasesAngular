import { Routes } from '@angular/router';
import { SharedModule } from './components/shared/shared.module';
import { ProductosModule } from './components/productos/productos.module';
import { ClientesModule } from './components/clientes/clientes.module';
import { ContactoComponent } from './components/shared/contacto/contacto.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },

  {
    path: 'inicio',
    loadChildren: () => SharedModule,
  },
  {
    path: 'productos',
    loadChildren: () => ProductosModule,
  },
  {
    path: 'clientes',
    loadChildren: () => ClientesModule,
  }, {
    path: 'contacto',
    component: ContactoComponent,
  },
  {
    path: '**',
    redirectTo: 'inicio',
  },
];
