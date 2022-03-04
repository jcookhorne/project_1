import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestReimbursementComponent } from './request-reimbursement.component';

describe('RequestReimbursementComponent', () => {
  let component: RequestReimbursementComponent;
  let fixture: ComponentFixture<RequestReimbursementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestReimbursementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestReimbursementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
