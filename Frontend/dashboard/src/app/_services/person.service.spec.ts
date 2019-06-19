import { TestBed } from '@angular/core/testing';

import { Person } from './person.service';

describe('Person.Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Person = TestBed.get(Person);
    expect(service).toBeTruthy();
  });
});
