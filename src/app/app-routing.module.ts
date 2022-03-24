import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthenticationGuard} from "./guards/authentication.guard";

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'enterprises',
    loadChildren: () => import('./enterprise/enterprise.module').then(m => m.EnterpriseModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: '**',
    redirectTo: 'contacts',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
