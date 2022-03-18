import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EnterpriseListComponent} from "./enterprise-list/enterprise-list.component";

const routes: Routes = [
  {
    path: 'list',
    component: EnterpriseListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnterpriseRoutingModule { }
