import { TestBed } from '@angular/core/testing';

import { TiendaVideojuegosService } from './tienda-videojuegos.service';

describe('TiendaVideojuegosService', () => {
  let service: TiendaVideojuegosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiendaVideojuegosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
