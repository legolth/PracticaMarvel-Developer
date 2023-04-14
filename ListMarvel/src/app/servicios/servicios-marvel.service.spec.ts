import { TestBed } from '@angular/core/testing';

import { ServiciosMarvelService } from './servicios-marvel.service';

describe('ServiciosMarvelService', () => {
  let service: ServiciosMarvelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosMarvelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
