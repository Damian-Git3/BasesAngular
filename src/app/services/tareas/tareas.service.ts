import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { ITarea } from '../../interfaces/tarea.interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  private _endPoint: string = environment.endPoint;
  private _apiUrl: string = this._endPoint + 'Tareas';

  constructor(private http: HttpClient) {}

  /* SERVICIO PARA OBTENER TODAS LAS LISTAS */
  getList(): Observable<ITarea[]> {
    return this.http.get<ITarea[]>(`${this._apiUrl}/listar`);
  }

  /* METODO PARA INSERTAR UNA NUEVA TAREA */
  insert(tarea: ITarea): Observable<ITarea> {
    return this.http.post<ITarea>(`${this._apiUrl}/agregar`, tarea);
  }

  /* SERVICIO PARA MODIFICAR UNA TAREA */
  update(tarea: ITarea): Observable<ITarea> {
    let params = new HttpParams().set('id', tarea.idTarea.toString());
    return this.http.put<ITarea>(`${this._apiUrl}/modificar`, tarea, { params });
  }

  /* SERVICIO PARA BORRAR UNA TAREA */
  delete(idTarea: number): Observable<void> {
    return this.http.delete<void>(`${this._apiUrl}/eliminar?id=${idTarea}`);
  }
}
