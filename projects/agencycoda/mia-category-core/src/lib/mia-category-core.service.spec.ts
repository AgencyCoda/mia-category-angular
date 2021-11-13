import { TestBed } from '@angular/core/testing';

import { MiaCategoryCoreService } from './mia-category-core.service';

describe('MiaCategoryCoreService', () => {
  let service: MiaCategoryCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiaCategoryCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
