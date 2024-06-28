import { Component } from '@angular/core';
import { Datos } from '../../../interfaces/giphy.interface';
import { GiphyService } from '../../../services/giphy/giphy.service';


@Component({
  selector: 'app-listado-imagenes',
  templateUrl: './listado-imagenes.component.html',
  styleUrl: './listado-imagenes.component.css',
})
export class ListadoImagenesComponent {
  resultados: Datos[] = [];
  // Inyectamos el servicio
  constructor(
    private giphyService: GiphyService
  ) {}

  obtenerImagenes() {
    console.log('Obteniendo imagenes');
    // this.resultados = this.giphyService.obtenerGifs();

  }
}
