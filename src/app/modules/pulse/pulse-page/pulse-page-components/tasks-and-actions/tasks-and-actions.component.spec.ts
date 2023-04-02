import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksAndActionsComponent } from './tasks-and-actions.component';

describe('TasksAndActionsComponent', () => {
  let component: TasksAndActionsComponent;
  let fixture: ComponentFixture<TasksAndActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksAndActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksAndActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
