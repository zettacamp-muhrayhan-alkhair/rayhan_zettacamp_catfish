import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostCreationComponent } from './post-management/post-creation/post-creation.component';
import { PostListComponent } from './post-management/post-list/post-list.component';
import { PostManagementComponent } from './post-management/post-management/post-management.component';

const routes: Routes = [
  { path: '', component: PostManagementComponent },
  { path: 'post-list', component: PostListComponent },
  { path: 'post-form', component: PostCreationComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
