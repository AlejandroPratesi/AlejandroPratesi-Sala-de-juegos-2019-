import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEncabezadoComponent } from './menu-encabezado.component';

describe('MenuEncabezadoComponent', () => {
  let component: MenuEncabezadoComponent;
  let fixture: ComponentFixture<MenuEncabezadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuEncabezadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuEncabezadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
