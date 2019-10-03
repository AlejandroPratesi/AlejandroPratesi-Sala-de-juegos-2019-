import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaTeTiListadoComponent } from './ta-te-ti-listado.component';

describe('TaTeTiListadoComponent', () => {
  let component: TaTeTiListadoComponent;
  let fixture: ComponentFixture<TaTeTiListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaTeTiListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaTeTiListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
