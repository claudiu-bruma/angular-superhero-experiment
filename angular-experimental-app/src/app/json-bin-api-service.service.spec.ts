import { TestBed } from '@angular/core/testing';

import { JsonBinApiServiceService } from './json-bin-api-service.service';

describe('JsonBinApiServiceService', () => {
  let service: JsonBinApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonBinApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
