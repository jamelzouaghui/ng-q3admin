import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ReactiveFormsModule } from '@angular/forms';

import { FocusgroupeRoutingModule } from './focusgroupe-routing.module';
import {FocusgroupeComponent} from './../focusgroupe/focusgroupe.component';
import { AddfocusgroupeComponent } from './addfocusgroupe/addfocusgroupe.component';

@NgModule({
  imports: [
    CommonModule,
    FocusgroupeRoutingModule,
    FormsModule,
    BsDatepickerModule,
    ReactiveFormsModule
  ],
  declarations: [FocusgroupeComponent, AddfocusgroupeComponent]
})
export class FocusgroupeModule { }
