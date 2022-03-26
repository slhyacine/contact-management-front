import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EnterpriseListComponent} from "./enterprise-list/enterprise-list.component";
import {AddEnterpriseComponent} from './add-enterprise/add-enterprise.component';
import {EditEnterpriseComponent} from "./edit-enterprise/edit-enterprise.component";
import {ViewEnterpriseComponent} from "./view-enterprise/view-enterprise.component";

const routes: Routes = [
  {
    path: 'list',
    component: EnterpriseListComponent
  },
  {
    path: 'new',
    component: AddEnterpriseComponent
  },
  {
    path: ':id/edit',
    component: EditEnterpriseComponent
  },
  {
    path: ':id/view',
    component: ViewEnterpriseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnterpriseRoutingModule { }
