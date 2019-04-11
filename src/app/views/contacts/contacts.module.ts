import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {DataTableModule} from "angular-6-datatable";

import { NgSelectModule } from '@ng-select/ng-select';

import { ContactsRoutingModule } from './contacts-routing.module';
import {ContactsComponent} from './../contacts/contacts.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule,
    FormsModule,
    BsDatepickerModule,
    DataTableModule,
    NgSelectModule
  ],
  declarations: [ContactsComponent, DeleteContactComponent, UpdateContactComponent, AddContactComponent]
})
export class ContactsModule { }
