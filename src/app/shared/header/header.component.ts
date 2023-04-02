import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  notifications: any = [{name: "Notification 1"},{name: "Notification 2"}];
  numberOfNotifications: number = this.notifications.length;
  dropdown: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  showNotifications(): void {
    this.numberOfNotifications = 0;
    this.dropdown = !this.dropdown;
  }

  openNotification(): void {
    this.dropdown = false;   // Closing dropdown
  }

  closeNotifications(): void {
    this.dropdown = false;
  }

}
