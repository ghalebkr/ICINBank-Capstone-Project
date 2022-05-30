import { TestBed } from '@angular/core/testing';

import { ShareuserService } from './shareuser.service';

describe('ShareuserService', () => {
  let service: ShareuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
