import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PulsePageComponent } from './pulse-page/pulse-page.component';

const routes: Routes = [{ path: '', component: PulsePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }