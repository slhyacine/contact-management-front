import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import {ContactListComponent} from "./contact-list/contact-list.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";


@NgModule({
  declarations: [
    ContactListComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class ContactModule { }
