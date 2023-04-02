import { Component, OnInit } from '@angular/core';
import { PulseService } from 'src/app/shared/services/pulse.service';
import * as dataJSOn from '../../../../assets/json/data.json';

@Component({
  selector: 'app-pulse-page',
  templateUrl: './pulse-page.component.html',
  styleUrls: ['./pulse-page.component.scss']
})
export class PulsePageComponent implements OnInit {

  calendarActive: boolean = false;
  data: any = dataJSOn;

  constructor(private pulseService: PulseService) { }

  ngOnInit(): void {
    this.pulseService.$calendarActive.subscribe((value) => {
      this.calendarActive = value;
    })
  }

  triggerCalendar(): void {
    this.pulseService.changeState();
  }
}
