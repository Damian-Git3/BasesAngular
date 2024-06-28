import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-acumulador',
  standalone: true,
  imports: [],
  templateUrl: './acumulador.component.html',
  styleUrl: './acumulador.component.css'
})
export class AcumuladorComponent {
  title = 'Bases de angular';

  numero : number = 2;

  duplicar() {
    this.numero *= 2;
  }

  triplicar() {
    this.numero *= 3;
  }

  reiniciar() {
    this.numero = 2;
  }

}
