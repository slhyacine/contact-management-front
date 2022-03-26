import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import {ContactListComponent} from "./contact-list/contact-list.component";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { AddContactComponent } from './add-contact/add-contact.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {CustomDirectivesModule} from "../directives/directives.module";
import { EditContactComponent } from './edit-contact/edit-contact.component';
import {MatRippleModule} from "@angular/material/core";
import { ViewContactComponent } from './view-contact/view-contact.component';
import {MatListModule} from "@angular/material/list";


@NgModule({
  declarations: [
    ContactListComponent,
    AddContactComponent,
    EditContactComponent,
    ViewContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    CustomDirectivesModule,
    MatRippleModule,
    MatListModule
  ]
})
export class ContactModule { }
