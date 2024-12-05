import { TestBed } from '@angular/core/testing';

import { RoutingDataService } from './routing-data.service';

describe('RoutingDataService', () => {
  let service: RoutingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
