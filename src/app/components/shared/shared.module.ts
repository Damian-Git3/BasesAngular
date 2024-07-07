import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { MenubarModule } from 'primeng/menubar';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedRoutes } from './shared.routing';
import { ContactoComponent } from './contacto/contacto.component';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';


@NgModule({
  imports: [
    CommonModule,
    SharedRoutes,
    MenubarModule,
    ImageModule,
    ImageModule,
    InputTextModule,
    FloatLabelModule,
    FormsModule,
    CardModule
  ],
  declarations: [NavbarComponent, InicioComponent, ContactoComponent],
  exports: [NavbarComponent]
})
export class SharedModule { }
