import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthenticationGuard} from "./guards/authentication.guard";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {Error404Component} from "./error404/error404.component";

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: 'contacts',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
        canActivate: [AuthenticationGuard]
      },
      {
        path: 'enterprises',
        loadChildren: () => import('./enterprise/enterprise.module').then(m => m.EnterpriseModule),
        canActivate: [AuthenticationGuard]
      }
    ]
  },
  {
    path: '**',
    component: Error404Component
  }
  // {
  //   path: '**',
  //   redirectTo: 'contacts',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
