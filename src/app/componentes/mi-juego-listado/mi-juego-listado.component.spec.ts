import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiJuegoListadoComponent } from './mi-juego-listado.component';

describe('MiJuegoListadoComponent', () => {
  let component: MiJuegoListadoComponent;
  let fixture: ComponentFixture<MiJuegoListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiJuegoListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiJuegoListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
