import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {DataTableModule} from "angular-6-datatable";

import { HttpClientModule }    from '@angular/common/http';

import { NgSelectModule } from '@ng-select/ng-select';


import { PanelRoutingModule } from './panel-routing.module';
import {PanelComponent} from './../panel/panel.component';
//import { DeleteContactComponent } from './delete-contact/delete-contact.component';
//import { UpdateContactComponent } from './update-contact/update-contact.component';
//import { AddContactComponent } from './add-contact/add-contact.component';

@NgModule({
  imports: [
    CommonModule,
    PanelRoutingModule,
    FormsModule,
    BsDatepickerModule,
    DataTableModule,
    NgSelectModule,
    HttpClientModule
  ],
  declarations: [PanelComponent]
})
export class PanelModule { }
