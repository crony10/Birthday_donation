import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CONTACTUSComponent } from './contact-us.component';

describe('CONTACTUSComponent', () => {
  let component: CONTACTUSComponent;
  let fixture: ComponentFixture<CONTACTUSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CONTACTUSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CONTACTUSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
