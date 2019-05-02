import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMedicatiePage } from './page-medicatie.page';

describe('PageMedicatiePage', () => {
  let component: PageMedicatiePage;
  let fixture: ComponentFixture<PageMedicatiePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMedicatiePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMedicatiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
