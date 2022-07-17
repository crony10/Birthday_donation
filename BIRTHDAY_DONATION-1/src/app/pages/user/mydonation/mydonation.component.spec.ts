import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydonationComponent } from './mydonation.component';

describe('MydonationComponent', () => {
  let component: MydonationComponent;
  let fixture: ComponentFixture<MydonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MydonationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MydonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
