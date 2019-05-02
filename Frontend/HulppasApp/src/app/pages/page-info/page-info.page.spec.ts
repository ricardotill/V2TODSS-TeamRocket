import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInfoPage } from './page-info.page';

describe('PageInfoPage', () => {
  let component: PageInfoPage;
  let fixture: ComponentFixture<PageInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
