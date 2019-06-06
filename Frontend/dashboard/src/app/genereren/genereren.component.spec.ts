import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenererenComponent } from './genereren.component';

describe('GenererenComponent', () => {
  let component: GenererenComponent;
  let fixture: ComponentFixture<GenererenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenererenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenererenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
