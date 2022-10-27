import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManagementComponent } from '../app/user-management/user-management/user-management.component';
import { UserListComponent } from '../app/user-management/user-list/user-list.component';
import { UserCreationComponent } from '../app/user-management/user-creation/user-creation.component';

const routes: Routes = [
  { path: '', component: UserManagementComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'user-form', component: UserCreationComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
