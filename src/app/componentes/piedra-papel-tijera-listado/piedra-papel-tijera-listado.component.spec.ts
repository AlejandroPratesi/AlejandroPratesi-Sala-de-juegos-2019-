import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiedraPapelTijeraListadoComponent } from './piedra-papel-tijera-listado.component';

describe('PiedraPapelTijeraListadoComponent', () => {
  let component: PiedraPapelTijeraListadoComponent;
  let fixture: ComponentFixture<PiedraPapelTijeraListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiedraPapelTijeraListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiedraPapelTijeraListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
