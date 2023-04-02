import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsRoutingModule } from './actions.routing.module';
import { ActionsComponent } from './actions/actions.component';

@NgModule({
  declarations: [
    ActionsComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule
  ]
})

export class ActionsModule { }