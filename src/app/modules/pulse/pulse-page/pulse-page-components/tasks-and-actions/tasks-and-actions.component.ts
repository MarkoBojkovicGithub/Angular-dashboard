import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-tasks-and-actions',
  templateUrl: './tasks-and-actions.component.html',
  styleUrls: ['./tasks-and-actions.component.scss']
})
export class TasksAndActionsComponent implements OnInit {

  tasks: any = null;
  actions: any = null;
  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.tasks = this.storageService.getTasks();
    this.actions = this.storageService.getActions();
  }
}
