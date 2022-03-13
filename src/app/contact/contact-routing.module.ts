import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactListComponent} from "./contact-list/contact-list.component";

const routes: Routes = [
  {
    path: 'list',
    component: ContactListComponent
  },
  {
    path: '**',
    redirectTo: 'list'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
