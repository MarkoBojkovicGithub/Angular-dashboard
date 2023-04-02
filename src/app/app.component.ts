import { Component } from '@angular/core';
import { Event, RouterEvent, Router, NavigationStart} from '@angular/router';
import { filter } from 'rxjs';
import { MenuService } from './shared/services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title: any = "";
  constructor(public router: Router, private menuService: MenuService) {
      router.events.pipe(      
          filter((event: Event): event is RouterEvent => event instanceof RouterEvent)
      ).subscribe((event: RouterEvent) => {
          this.menuService.UpdatedRouter(event.url);        //Sending new route to menuservice
      });
  }
}
