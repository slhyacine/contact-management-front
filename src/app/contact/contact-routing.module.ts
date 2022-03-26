import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactListComponent} from "./contact-list/contact-list.component";
import {AddContactComponent} from "./add-contact/add-contact.component";
import {EditContactComponent} from "./edit-contact/edit-contact.component";
import {ViewContactComponent} from "./view-contact/view-contact.component";

const routes: Routes = [
  {
    path: 'list',
    component: ContactListComponent
  },
  {
    path: 'new',
    component: AddContactComponent
  },
  {
    path: ':id/edit',
    component: EditContactComponent
  },
  {
    path: ':id/view',
    component: ViewContactComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
