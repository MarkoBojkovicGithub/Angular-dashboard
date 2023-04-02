import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsTimelineComponent } from './items-timeline.component';

describe('ItemsTimelineComponent', () => {
  let component: ItemsTimelineComponent;
  let fixture: ComponentFixture<ItemsTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
