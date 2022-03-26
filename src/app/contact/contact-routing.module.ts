import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactListComponent} from "./contact-list/contact-list.component";
import {AddContactComponent} from "./add-contact/add-contact.component";

const routes: Routes = [
  {
    path: 'list',
    component: ContactListComponent
  },
  {
    path: 'new',
    component: AddContactComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
