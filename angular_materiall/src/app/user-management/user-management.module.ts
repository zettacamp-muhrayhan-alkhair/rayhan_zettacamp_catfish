import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreationComponent } from './user-creation/user-creation.component';
import { UserCardComponent } from './user-list/user-card/user-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  declarations: [
    UserManagementComponent,
    UserListComponent,
    UserCreationComponent,
    UserCardComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, AngularMaterialModule],
  exports: [
    UserManagementComponent,
    UserListComponent,
    UserCreationComponent,
    UserCardComponent,
    ReactiveFormsModule,
  ],
})
export class UserManagementModule {}
