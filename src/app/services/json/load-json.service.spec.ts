import { TestBed } from '@angular/core/testing';

import { LoadJsonService } from './load-json.service';

describe('LoadJsonService', () => {
  let service: LoadJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
