import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  pulse: boolean = true;
  items: boolean = false;
  meeting: boolean = false;
  actions: boolean = false;

  constructor( private menuService: MenuService) { 

  }

  ngOnInit(): void {
    this.menuService.$routerURL.subscribe((item) => {
      this.updateManu(item);
    })
  }

  updateManu(item: string): void {
    switch(item) {
      case 'pulse': this.resetIcons(); this.pulse = true;
      break;
      case 'items': this.resetIcons(); this.items = true;
      break;
      case 'meeting': this.resetIcons(); this.meeting = true;
      break;
      case 'actions': this.resetIcons(); this.actions = true;
    }
  }

  resetIcons(): void {
    this.pulse = false;
    this.items = false;
    this.meeting = false;
    this.actions = false;
  }
}
