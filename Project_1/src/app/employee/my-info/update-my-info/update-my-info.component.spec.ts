import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMyInfoComponent } from './update-my-info.component';

describe('UpdateMyInfoComponent', () => {
  let component: UpdateMyInfoComponent;
  let fixture: ComponentFixture<UpdateMyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMyInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
