import { TestBed } from '@angular/core/testing';

import { EmplHttpService } from './empl-http.service';

describe('EmplHttpService', () => {
  let service: EmplHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmplHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
