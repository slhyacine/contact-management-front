import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnyRoleDirective } from './any-role.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AnyRoleDirective,
  ],
  exports: [
    AnyRoleDirective, 
  ]
})
export class CustomDirectivesModule { }
