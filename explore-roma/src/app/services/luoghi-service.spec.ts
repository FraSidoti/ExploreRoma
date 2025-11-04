import { TestBed } from '@angular/core/testing';

import { LuoghiService } from './luoghi-service';

describe('LuoghiService', () => {
  let service: LuoghiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LuoghiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
