import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements OnInit{
  titulo: string = 'Contacto';


  formulario = {
    nombre: '',
    apellido: '',
    correo: '',
    asunto: '',
    mensaje: ''
  }

  constructor() { }

  ngOnInit(): void {
  }
}
