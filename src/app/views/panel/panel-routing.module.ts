import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './../../_guards/auth.guard';

import {PanelComponent} from './../panel/panel.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Panel'
    },
    children: [
      {
        path: 'panel',
        component: PanelComponent,
        canActivate:[AuthGuard],
        data: {
          title: 'Panel'
        }
      }
      
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
