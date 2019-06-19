import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VertrouwenspersonenComponent } from './vertrouwenspersonen.component';

describe('VertrouwenspersonenComponent', () => {
  let component: VertrouwenspersonenComponent;
  let fixture: ComponentFixture<VertrouwenspersonenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VertrouwenspersonenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VertrouwenspersonenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
