import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './../../_guards/auth.guard';
import {UsersComponent} from './../users/users.component';
import {AddUserComponent} from './../users/add-user/add-user.component';
import {AddMediaComponent} from './../users/add-media/add-media.component';

import {ListGroupesComponent} from './../users/list-groupes/list-groupes.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Users'
    },
    children: [
      {
        path: 'users',
        component: UsersComponent,
        canActivate:[AuthGuard],
        data: {
          title: 'Users'
        }
      },
      {
        path: 'userAdd',
        component: AddUserComponent,
        canActivate:[AuthGuard],
        data: {
          title: 'userAdd'
        }
      },
      {
        path: 'groupes',
        component: ListGroupesComponent,
        canActivate:[AuthGuard],
        data: {
          title: 'groupes'
        }
      }
      
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {}
