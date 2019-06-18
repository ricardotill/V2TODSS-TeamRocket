import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NieuwpatientComponent } from './nieuwpatient.component';

describe('NieuwpatientComponent', () => {
  let component: NieuwpatientComponent;
  let fixture: ComponentFixture<NieuwpatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NieuwpatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NieuwpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
