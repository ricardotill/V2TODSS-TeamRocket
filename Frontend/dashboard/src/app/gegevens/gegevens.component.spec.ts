import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GegevensComponent } from './gegevens.component';

describe('GegevensComponent', () => {
  let component: GegevensComponent;
  let fixture: ComponentFixture<GegevensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GegevensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GegevensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
