import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnterpriseRoutingModule } from './enterprise-routing.module';
import { EnterpriseListComponent } from './enterprise-list/enterprise-list.component';
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    EnterpriseListComponent
  ],
  imports: [
    CommonModule,
    EnterpriseRoutingModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
  ]
})
export class EnterpriseModule { }
