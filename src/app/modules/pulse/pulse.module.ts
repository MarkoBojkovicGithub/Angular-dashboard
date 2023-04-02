import { PulsePageComponent } from './pulse-page/pulse-page.component';
import { QuickLinksComponent } from './pulse-page/pulse-page-components/quick-links/quick-links.component';
import { CalendarComponent } from './pulse-page/pulse-page-components/calendar/calendar.component';
import { TasksAndActionsComponent } from './pulse-page/pulse-page-components/tasks-and-actions/tasks-and-actions.component';
import { ItemsTimelineComponent } from './pulse-page/pulse-page-components/items-timeline/items-timeline.component';

import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HomeRoutingModule } from './pulse.routing.module';
import { ModalModule } from "ngx-bootstrap/modal";
import { ReactiveFormsModule } from '@angular/forms';

import { ItemsDateMonthPipe } from './pulse-page/pulse-page-components/items-timeline/items-date-month.pipe';
import { CalendarDatePipe } from './pulse-page/pulse-page-components/calendar/calendar.pipe';
import { ItemsDateDayPipe } from './pulse-page/pulse-page-components/items-timeline/items-date-day.pipe';
import { TasksAndActionsPercentagePipe } from './pulse-page/pulse-page-components/tasks-and-actions/tasks-and-actions-percentage.pipe';
import { TasksAndActionsMonthPipe } from './pulse-page/pulse-page-components/tasks-and-actions/tasks-and-actions-month.pipe';

@NgModule({
  declarations: [
    PulsePageComponent,
    QuickLinksComponent,
    CalendarComponent,
    ItemsTimelineComponent,
    TasksAndActionsComponent,

    CalendarDatePipe,
    ItemsDateMonthPipe,
    ItemsDateDayPipe,
    TasksAndActionsPercentagePipe,
    TasksAndActionsMonthPipe,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ModalModule.forRoot(),
    ReactiveFormsModule
  ]
})

export class PulseModule { }