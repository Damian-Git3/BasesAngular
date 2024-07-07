import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  opciones: MenuItem[] = [];
  constructor() {

    this.opciones = [
      /* {
        label: 'Clientes',
        icon: 'pi pi-users',
        routerLink: '/clientes',
      }, */
      /* {
        label: 'Empleados',
        icon: 'pi pi-address-book',
        routerLink: '/empleados',
      }, */
      /* {
        label: 'Giphy',
        icon: 'pi pi-image',
        routerLink: '/giphy',
      }, */
      /* {
        label: 'Tareas',
        icon: 'pi pi-list',
        routerLink: '/tareas',
      } */
      {
        label: 'Inicio',
        icon: 'pi pi-home',
        routerLink: '/inicio',
      },
      {
        label: 'Productos',
        icon: 'pi pi-shopping-cart',
        routerLink: '/productos',
      }, {
        label: 'Contacto',
        icon: 'pi pi-envelope',
        routerLink: '/contacto',
      }
    ];
  }

  ngOnInit() {
    console.log('NavbarComponent inicializado');
  }

}
