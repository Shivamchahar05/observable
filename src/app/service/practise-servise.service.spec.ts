import { TestBed } from '@angular/core/testing';

import { PractiseServiseService } from './practise-servise.service';

describe('PractiseServiseService', () => {
  let service: PractiseServiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PractiseServiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
