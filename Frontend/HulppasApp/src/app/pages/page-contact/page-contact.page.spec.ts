import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContactPage } from './page-contact.page';

describe('PageContactPage', () => {
  let component: PageContactPage;
  let fixture: ComponentFixture<PageContactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageContactPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
