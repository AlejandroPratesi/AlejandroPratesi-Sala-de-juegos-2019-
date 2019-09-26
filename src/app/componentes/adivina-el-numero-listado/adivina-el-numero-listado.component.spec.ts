import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdivinaElNumeroListadoComponent } from './adivina-el-numero-listado.component';

describe('AdivinaElNumeroListadoComponent', () => {
  let component: AdivinaElNumeroListadoComponent;
  let fixture: ComponentFixture<AdivinaElNumeroListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdivinaElNumeroListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdivinaElNumeroListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
