import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { PulseService } from 'src/app/shared/services/pulse.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  calendarContainer: boolean = false;
  calendarEventNotification: boolean = false;
  calendarForm = new FormGroup({
    formName: new FormControl(),
    formDate: new FormControl()
  })

  calendar: any = null;

  constructor(private pulseService: PulseService, private storageService: StorageService) { }

  ngOnInit(): void {
    this.calendar = this.storageService.getCalendar();
    this.pulseService.$calendarActive.subscribe((value) => {
      this.calendarContainer = value;
    })
  }

  triggerCalendar(): void {
    this.calendarContainer = !this.calendarContainer;
    this.pulseService.$calendarActive.next(this.calendarContainer);
  }

  onSubmit(): void {
    // Adding new item to calender
  }
}
