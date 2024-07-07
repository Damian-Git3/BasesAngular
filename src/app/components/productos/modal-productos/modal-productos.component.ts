import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-productos',
  templateUrl: './modal-productos.component.html',
  styleUrl: './modal-productos.component.css',
})
export class ModalProductosComponent implements OnInit {
  display: boolean = false;
  @Output() relaad = new EventEmitter<boolean>();
  titulo: string = 'Agregar Producto';


  constructor() {}

  ngOnInit(): void { }

  show() {
    this.display = true;
  }

  hide() {
    this.display = false;
  }
}
