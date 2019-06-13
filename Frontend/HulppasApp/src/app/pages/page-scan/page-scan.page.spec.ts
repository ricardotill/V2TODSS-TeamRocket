import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageScanPage } from './page-scan.page';

describe('PageScanPage', () => {
  let component: PageScanPage;
  let fixture: ComponentFixture<PageScanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageScanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageScanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
