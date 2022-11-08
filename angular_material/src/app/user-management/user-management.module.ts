import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './user-management.component';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { CardComponent } from './list/card/card.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', component: UserManagementComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [UserManagementComponent, ListComponent, CardComponent, UserListComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [UserManagementComponent, ListComponent, CardComponent],
})
export class UserManagementModule {}
