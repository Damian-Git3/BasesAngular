import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPelicula } from '../../interfaces/pelicula.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private _endPoint: string = environment.endPoint;
  private _apiUrl: string = this._endPoint + 'Peliculas';

  constructor(private http: HttpClient) {}

  /* SERVICIO PARA OBTENER TODAS LAS LISTAS */
  getList(): Observable<IPelicula[]> {
    return this.http.get<IPelicula[]>(`${this._apiUrl}`);
  }
}
