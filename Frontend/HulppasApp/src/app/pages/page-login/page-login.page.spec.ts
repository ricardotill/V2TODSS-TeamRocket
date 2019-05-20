import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLoginPage } from './page-login.page';

describe('PageLoginPage', () => {
  let component: PageLoginPage;
  let fixture: ComponentFixture<PageLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
