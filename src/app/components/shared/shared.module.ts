import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    MenubarModule
  ],
  declarations: [NavbarComponent],
  exports: [ NavbarComponent]
})
export class SharedModule { }
