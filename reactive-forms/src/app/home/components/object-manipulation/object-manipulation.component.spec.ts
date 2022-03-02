import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectManipulationComponent } from './object-manipulation.component';

describe('ObjectManipulationComponent', () => {
  let component: ObjectManipulationComponent;
  let fixture: ComponentFixture<ObjectManipulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectManipulationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectManipulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
