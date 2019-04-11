import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ListGroupesComponent } from './list-groupes/list-groupes.component';
import { AddMediaComponent } from './add-media/add-media.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [UsersComponent, AddUserComponent, ListGroupesComponent, AddMediaComponent],
   exports: [ AddMediaComponent ]
})
export class UsersModule { }
