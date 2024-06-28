import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { ITarea } from '../../interfaces/tarea.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TareasService {

  private _endPoint: string = environment.endPoint;
  private _apiUrl: string = this._endPoint + 'Tareas/';

  constructor(private http: HttpClient) {}

  /* SERVICIO PARA OBTENER TODAS LAS LISTAS */
  getList(): Observable<ITarea[]> {
    return this.http.get<ITarea[]>(`${this._apiUrl}ListaTareas`);
  }

  /* METODO PARA INSERTAR UNA NUEVA TAREA */
  insert(tarea: ITarea): Observable<ITarea> {
    return this.http.post<ITarea>(`${this._apiUrl}AgregarTarea`, tarea);
  }

  /* SERVICIO PARA MODIFICAR UNA TAREA */
  update(tarea: ITarea): Observable<ITarea> {
    return this.http.put<ITarea>(`${this._apiUrl}ModificarTarea`, tarea);
  }

  /* SERVICIO PARA BORRAR UNA TAREA */
  delete(idTarea: number): Observable<void> {
    return this.http.delete<void>(
      `${this._apiUrl}EliminarTarea?idTarea=${idTarea}`
    );
  };
}
