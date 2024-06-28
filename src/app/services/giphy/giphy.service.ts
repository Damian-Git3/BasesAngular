import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Datos, GiphyData } from '../../interfaces/giphy.interface';

@Injectable({
  providedIn: 'root',
})
export class GiphyService {
  url: string = 'https://api.giphy.com/v1/gifs/trending';
  apiKey: string = 'anKlIdLxkxXApDbScDWJUxsha3GqoUhu';
  limit: number = 10;
  offset: number = 0;
  resultados: Datos[] = [];

  constructor(private HttpClient: HttpClient) {}

  obtenerGifs(): Datos[] {
    this.HttpClient.get<GiphyData>(
      `${this.url}?api_key=${this.apiKey}&limit=${this.limit}&offset=${this.offset}`
    ).subscribe((data) => {
      this.resultados = data.data;
    });
    return this.resultados;
  }
}
