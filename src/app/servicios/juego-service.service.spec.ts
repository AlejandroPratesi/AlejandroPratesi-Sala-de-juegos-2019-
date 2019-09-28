import { TestBed } from '@angular/core/testing';

import { JuegoServiceService } from './juego-service.service';

describe('JuegoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JuegoServiceService = TestBed.get(JuegoServiceService);
    expect(service).toBeTruthy();
  });
});
