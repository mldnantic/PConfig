import { TestBed } from '@angular/core/testing';

import { Partservice } from './partservice';

describe('Partservice', () => {
  let service: Partservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Partservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
