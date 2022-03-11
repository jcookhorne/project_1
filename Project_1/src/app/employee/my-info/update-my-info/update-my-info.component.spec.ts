import { HttpClient } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMyInfoComponent } from './update-my-info.component';

describe('UpdateMyInfoComponent', () => {
  let component: UpdateMyInfoComponent;
  let fixture: ComponentFixture<UpdateMyInfoComponent>;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateMyInfoComponent]
    })

      .compileComponents();
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
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
