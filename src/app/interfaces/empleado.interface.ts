import { DatePipe } from "@angular/common"

export interface IEmpleado
{
  idEmpleado?: number,
  nombre: string,
  correo: string,
  telefono: string,
  fechaNacimiento: Date | DatePipe
  sexo: string
}
