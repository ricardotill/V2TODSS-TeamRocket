import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageQrCodePage } from './page-qr-code.page';

describe('PageQrCodePage', () => {
  let component: PageQrCodePage;
  let fixture: ComponentFixture<PageQrCodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageQrCodePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageQrCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
