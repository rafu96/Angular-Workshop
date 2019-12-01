import { TestBed } from '@angular/core/testing';

import { MagicNumberService } from './magic-number.service';

describe('MagicNumberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MagicNumberService = TestBed.get(MagicNumberService);
    expect(service).toBeTruthy();
  });
});
