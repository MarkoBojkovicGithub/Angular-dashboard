import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full',redirectTo: 'pulse' },
  { path: 'pulse', loadChildren: () => import('./modules/pulse/pulse.module').then(m => m.PulseModule) },
  { path: 'meeting', loadChildren: () => import('./modules/meeting/meeting.module').then(m => m.MeetingModule)},
  { path: 'items', loadChildren: () => import('./modules/items/items.module').then(m => m.ItemsModule)},
  { path: 'actions', loadChildren: () => import('./modules/actions/actions.module').then(m => m.ActionsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
