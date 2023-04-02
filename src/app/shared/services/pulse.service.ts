import { Component, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class PulseService {
    public $calendarActive: Subject<boolean> = new Subject();
    calendarActive: boolean = false;

    changeState(): void {
        this.calendarActive = !this.calendarActive;
        this.$calendarActive.next(this.calendarActive);
    }
}