import { TestBed } from '@angular/core/testing';

import { PersonResolverService } from './person-resolver.service';

describe('PersonResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonResolverService = TestBed.get(PersonResolverService);
    expect(service).toBeTruthy();
  });
});
