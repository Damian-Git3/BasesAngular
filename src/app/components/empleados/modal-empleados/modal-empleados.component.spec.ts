import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEmpleadosComponent } from './modal-empleados.component';

describe('ModalEmpleadosComponent', () => {
  let component: ModalEmpleadosComponent;
  let fixture: ComponentFixture<ModalEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEmpleadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
