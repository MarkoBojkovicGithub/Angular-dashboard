import { Component, Injectable } from "@angular/core";
import * as dataJSON from '../../../assets/json/data.json';

@Injectable({
    providedIn:'root'
})

export class StorageService {

    //All lists of items
    calendar: any = []
    itemsList: any = []
    tasks: any = []
    actions: any = []
    data: any = dataJSON as any;

    // Quick items new list created by user
    quickItems: any = [];

    constructor() {
        this.calendar = this.data.calendar;
        this.itemsList = this.data.itemsList;
        this.tasks = this.data.tasks;
        this.actions = this.data.actions;
    }

    getCalendar(): any {
        return this.calendar;
    }

    getItemsList(): any {
        return this.itemsList;
    }

    getTasks(): any {
        return this.tasks;
    }

    getActions(): any {
        return this.actions;
    }

    addQuickItem(item: any) {
        this.quickItems.push(item);
    }
}
