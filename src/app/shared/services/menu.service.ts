import { Component, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class MenuService {
    public $routerURL: Subject<any> = new Subject();
    pulseActive: boolean = false;

    //Updating current route
    UpdatedRouter(url: any): void {
        switch(url) {
            case '/pulse': this.updateMenu("pulse");
            break;
            case '/items': this.updateMenu("items");
            break;
            case '/meeting': this.updateMenu("meeting");
            break;
            case '/actions': this.updateMenu("actions");
        }
    }

    updateMenu(item: string) {
        this.$routerURL.next(item);
    }
}