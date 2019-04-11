import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './../../_guards/auth.guard';



import {ContactsComponent} from './../contacts/contacts.component';
import {DeleteContactComponent} from './../contacts/delete-contact/delete-contact.component';
import { UpdateContactComponent } from './../contacts/update-contact/update-contact.component';
import { AddContactComponent } from './../contacts/add-contact/add-contact.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Contacts'
    },
    children: [
      {
        path: 'contacts',
        component: ContactsComponent,
        canActivate:[AuthGuard],
        data: {
          title: 'Contacts'
        }
      },
      {
        path: 'contactAdd',
        component: AddContactComponent,
        canActivate:[AuthGuard],
        data: {
          title: 'contactAdd'
        }
      },
      {
        path: 'contactUpdate',
        component: UpdateContactComponent,
        canActivate:[AuthGuard],
        data: {
          title: 'contactUpdate'
        }
      },
      {
        path: 'contactDelete',
        component: DeleteContactComponent,
        canActivate:[AuthGuard],
        data: {
          title: 'contactDelete'
        }
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
