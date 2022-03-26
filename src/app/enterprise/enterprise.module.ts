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
import {MatIconModule} from "@angular/material/icon";
import { AddEnterpriseComponent } from './add-enterprise/add-enterprise.component';
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {CustomDirectivesModule} from "../directives/directives.module";
import { EditEnterpriseComponent } from './edit-enterprise/edit-enterprise.component';
import {MatRippleModule} from "@angular/material/core";
import { ViewEnterpriseComponent } from './view-enterprise/view-enterprise.component';
import {MatListModule} from "@angular/material/list";


@NgModule({
  declarations: [
    EnterpriseListComponent,
    AddEnterpriseComponent,
    EditEnterpriseComponent,
    ViewEnterpriseComponent
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
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    CustomDirectivesModule,
    MatSnackBarModule,
    MatRippleModule,
    MatListModule
  ]
})
export class EnterpriseModule { }
