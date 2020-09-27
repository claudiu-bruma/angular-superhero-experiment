import { TestBed } from '@angular/core/testing';

import { SuperheroApiServiceService } from './superhero-api-service.service';

describe('SuperheroApiServiceService', () => {
  let service: SuperheroApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperheroApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
