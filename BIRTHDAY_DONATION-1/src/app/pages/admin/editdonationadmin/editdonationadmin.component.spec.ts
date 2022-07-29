import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdonationadminComponent } from './editdonationadmin.component';

describe('EditdonationadminComponent', () => {
  let component: EditdonationadminComponent;
  let fixture: ComponentFixture<EditdonationadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdonationadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdonationadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
