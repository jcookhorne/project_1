import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoHttpComponent } from './info-http.component';

describe('InfoHttpComponent', () => {
  let component: InfoHttpComponent;
  let fixture: ComponentFixture<InfoHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
