import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallByReferenceValueComponent } from './call-by-reference-value.component';

describe('CallByReferenceValueComponent', () => {
  let component: CallByReferenceValueComponent;
  let fixture: ComponentFixture<CallByReferenceValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallByReferenceValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallByReferenceValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
