import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AuthGuard} from './../../_guards/auth.guard';


import {FocusgroupeComponent} from './../focusgroupe/focusgroupe.component';
import {AddfocusgroupeComponent} from './../focusgroupe/addfocusgroupe/addfocusgroupe.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'groupes'
    },
    children: [
      {
        path: 'groupes',
        component: FocusgroupeComponent,
        canActivate:[AuthGuard],
        data: {
          title: 'groupes'
        }
      },
      {
        path: 'groupeAdd',
        component: AddfocusgroupeComponent,
        canActivate:[AuthGuard],
        data: {
          title: 'groupeAdd'
        }
      }
     
      
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})



export class FocusgroupeRoutingModule { }
