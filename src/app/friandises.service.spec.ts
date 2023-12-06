import { TestBed } from '@angular/core/testing';

import { FriandisesService } from './friandises.service';

describe('FriandisesService', () => {
  let service: FriandisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FriandisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
