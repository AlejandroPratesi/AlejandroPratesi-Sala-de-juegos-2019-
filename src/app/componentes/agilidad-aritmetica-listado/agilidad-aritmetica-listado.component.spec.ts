import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgilidadAritmeticaListadoComponent } from './agilidad-aritmetica-listado.component';

describe('AgilidadAritmeticaListadoComponent', () => {
  let component: AgilidadAritmeticaListadoComponent;
  let fixture: ComponentFixture<AgilidadAritmeticaListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgilidadAritmeticaListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgilidadAritmeticaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
