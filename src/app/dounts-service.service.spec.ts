import { TestBed } from '@angular/core/testing';

import { DountsServiceService } from './dounts-service.service';

describe('DountsServiceService', () => {
  let service: DountsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DountsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
