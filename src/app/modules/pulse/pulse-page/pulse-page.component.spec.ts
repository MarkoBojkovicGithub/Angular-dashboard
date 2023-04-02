import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulsePageComponent } from './pulse-page.component';

describe('HomePageComponent', () => {
  let component: PulsePageComponent;
  let fixture: ComponentFixture<PulsePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PulsePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PulsePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
