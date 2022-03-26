import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EnterpriseListComponent} from "./enterprise-list/enterprise-list.component";
import {AddEnterpriseComponent} from "./add-enterprise/add-enterprise.component";

const routes: Routes = [
  {
    path: 'list',
    component: EnterpriseListComponent
  },
  {
    path: 'new',
    component: AddEnterpriseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnterpriseRoutingModule { }
