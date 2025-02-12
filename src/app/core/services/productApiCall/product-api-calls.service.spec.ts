import { TestBed } from '@angular/core/testing';

import { ProductApiCallsService } from './product-api-calls.service';

describe('ProductApiCallsService', () => {
  let service: ProductApiCallsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductApiCallsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
